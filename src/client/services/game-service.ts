import {
  HubEventsServer,
  HubEventsClient,
  IHubResponse,
  HubResponse,
  IPlayerInfo,
  ICreatePlayerRequest,
  ISpellSelected,
  IHealthUpdate,
} from '../../common';
import { ServerConnection } from './server-connection';

export class GameService {
  private gameId = '';

  private playerId = '';

  private players: Array<IPlayerInfo> = [];

  constructor(private readonly connection: ServerConnection) {
    connection.addEventListener(HubEventsClient.AddPlayer, (player: IPlayerInfo) => this.addPlayer(player));
    connection.addEventListener(HubEventsClient.RemovePlayer, (playerId: string) => this.removePlayer(playerId));
    connection.addEventListener(HubEventsClient.SpellSelected, (message: ISpellSelected) => this.spellSelect(message));
    connection.addEventListener(HubEventsClient.UpdateHealath, (message: IHealthUpdate) => this.healthUpdate(message));
  }

  get currentGameId(): string { return this.gameId; }

  get currentPlayerId(): string { return this.playerId; }

  get currentPlayers(): Array<IPlayerInfo> { return this.players; }

  private clearState(): void {
    this.gameId = '';
    this.playerId = '';
    this.players = [];
    this.onPlayerJoined = undefined;
    this.onPlayerLeaved = undefined;
  }

  private addPlayer(player: IPlayerInfo): IHubResponse<null> {
    this.players.push(player);
    this.players.sort((playerA, playerB) => playerA.position - playerB.position);
    this.onPlayerJoined?.call(this, player);
    return HubResponse.Ok();
  }

  private removePlayer(playerId: string): IHubResponse<null> {
    const removingPlayerIndex = this.players.findIndex((player) => player.id === playerId);
    if (removingPlayerIndex >= 0) {
      const removingPlayer = this.players.splice(removingPlayerIndex, 1)[0];
      this.onPlayerLeaved?.call(this, removingPlayer);
    }
    return HubResponse.Ok();
  }

  private async spellSelect(message: ISpellSelected): Promise<IHubResponse<null>> {
    if (this.onPlayerSelectSpell) await this.onPlayerSelectSpell(message.playerId, message.spellCards);
    return HubResponse.Ok();
  }

  private async healthUpdate(message: IHealthUpdate): Promise<IHubResponse<null>> {
    const player: IPlayerInfo = this.currentPlayers.find((playerInfo) => playerInfo.id === message.playerId);
    if (player) player.health = message.currentHealth;
    if (message.isDamage && this.onPlayerTakeDamage) {
      await this.onPlayerTakeDamage(message.playerId, message.currentHealth);
    }
    if (!message.isDamage && this.onPlayerTakeHeal) {
      await this.onPlayerTakeHeal(message.playerId, message.currentHealth);
    }
    return HubResponse.Ok();
  }

  onPlayerJoined?: (playerInfo: IPlayerInfo) => void;

  onPlayerLeaved?: (playerInfo: IPlayerInfo) => void;

  onPlayerSelectSpell?: (playerId: string, cardsInSpell: number) => Promise<void>;

  onPlayerTakeDamage?: (playerId: string, currentHealth: number) => Promise<void>;

  onPlayerTakeHeal?: (playerId: string, currentHealth: number) => Promise<void>;

  /**
   * This method returns promise, that resolve with gameId: string as argument
   */
  async newGame(): Promise<string> {
    this.clearState();
    this.gameId = await this.connection.dispatch<string>(HubEventsServer.NewGame);
    return this.gameId;
  }

  /**
   * This method returns array of players, who already joined to game
   */
  async joinGame(gameId: string): Promise<IPlayerInfo[]> {
    this.clearState();
    const playersInGame = await this.connection.dispatch<IPlayerInfo[]>(HubEventsServer.JoinGame, gameId);
    this.players.push(...playersInGame);
    return playersInGame;
  }

  /**
   * This method returns nothing now, but it should returns anything
   */
  async startGame(): Promise<void> {
    await this.connection.dispatch<void>(HubEventsServer.StartGame);
  }

  /**
   * This method returns created player
   */
  async createHero(request: ICreatePlayerRequest): Promise<IPlayerInfo> {
    const playerInfo = await this.connection.dispatch<IPlayerInfo>(HubEventsServer.AddPlayer, request);
    this.playerId = playerInfo.id;
    return playerInfo;
  }

  async selectSpell(cardIds: Array<string>): Promise<void> {
    await this.connection.dispatch(HubEventsServer.SelectSpell, cardIds);
  }
}
