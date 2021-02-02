export enum CSSClasses {
  // base
  Component = 'component',
  Button = 'button',
  Avatar = 'avatar',
  Timer = 'timer',
  BigTimer = 'timer--big',
  // start screen
  StartScreen = 'start-screen',
  StartScreenHidden = 'start-screen--hidden',
  StartScreenButtons = 'start-screen__buttons',
  StartScreenButton = 'start-screen__button',
  StartScreenLogo = 'start-screen__logo',
  // player list
  PlayerListWrapper = 'player-list-wrapper',
  PlayerList = 'player-list',
  PlayerListItem = 'player-list__item',
  EmptyItem = 'empty-item',
  PlayerAvatar = 'player__avatar',
  PlayerName = 'player__name',
  PlayerHero = 'player__hero',
  PlayerInfo = 'player__info',
  AddBotButton = 'bot-button',
  // cards spell
  Сard = 'card',
  CardFake = 'card--fake',
  СardBackside = 'card__backside',
  СardСontainer = 'card-container',
  CardFlipped = 'card-container--flipped',
  СardType = 'card-type',
  СardElement = 'card-element',
  СardContent = 'card__content',
  СardImage = 'card__image',
  СardTitle = 'card__title',
  СardText = 'card__text',
  CardDisabled = 'card-container--disable',
  CardBeforeAppend = 'card-container--before-append',
  CardBeforeRemove = 'card-container--before-remove',
  CardUsed = 'card-container--used',
  CardActive = 'card-container--active',
  // hero selection
  HeroSelection = 'hero-selection',
  HeroSelectionFullHero = 'hero-selection__full-hero',
  FullHeroHidden = 'full-hero--hidden',
  HeroSelectionHeroesWrapper = 'hero-selection__heroes-wrapper',
  HeroSelectionHeroes = 'hero-selection__heroes',
  HeroSelectionDisabled = 'hero-selection--disabled',
  Hero = 'hero',
  HeroImage = 'hero__image',
  HeroName = 'hero__name',
  HeroDisabled = 'hero--disabled',
  HeroSelected = 'hero--selected',
  // opponents cards
  OpponentsCards = 'opponents-cards',
  OpponentsCardsEmpty = 'opponents-cards--empty',
  OpponentCardItem = 'opponents-cards__item',
  // player display (game screen)
  GamePlayerDisplayContainer = 'game-player__container',
  GamePlayerDisplayContainerOpponent = 'game-player__container--opponent',
  GamePlayerDisplayContainerCurrent = 'game-player__container--current',
  GamePlayerSelected = 'game-player--selected',
  GamePlayerName = 'game-player__name',
  GamePlayerHero = 'game-player__hero',
  GamePlayerAvatar = 'game-player__avatar',
  GamePlayerHealth = 'game-player__health',
  // animations classes
  InGameAddHealthAnimation = 'game-player__animation--recovery',
  InGameBringDamageAnimation = 'game-player__animation--damage',
  GamePlayerPointsAnimation = 'game-player__animation--container',
  // lobby
  Lobby = 'lobby',
  LobbyHeader = 'lobby-header',
  LobbyMain = 'lobby-main',
  LobbyMainLeft = 'lobby-main__left',
  LobbyMainRight = 'lobby-main__right',
  LobbyButtons = 'lobby-buttons',
  LobbyTitle = 'lobby__title',
  LobbySubtitle = 'lobby__subtitle',
  GameLinkWrapper = 'lobby__link-wrapper',
  GameLink = 'lobby__game-link',
  CopyIcon = 'copy-icon',
  CopyTooltip = 'copy-tooltip',
  NameLabel = 'lobby__name-label',
  NameInput = 'lobby__name-input',
  NameInputValid = 'lobby__name-input--valid',
  NameInputInvalid = 'lobby__name-input--invalid',
  SelectHeroButton = 'lobby__select-hero',
  StartGameButton = 'lobby__start-game',
  StartGameButtonDisabled = 'lobby__start-game--disabled',
  // game screen
  GameScreen = 'game-screen',
  GameScreenCasting = 'game-screen--casting',
  GameOpponentsCards = 'game-screen__opponent-cards',
  GameOpponentCardsHide = 'game-screen__opponent-cards--hidden',
  GamePlaySection = 'game-screen__play-section',
  GameCardsSection = 'game-screen__card-section',
  GameUILayer = 'game-screen__ui-layer',
  GameScreenVignette = 'game-screen__vignette',
  GameOpponentsInfo = 'game-screen__opponents-info-container',
  GameOpponentSection = 'game-screen__opponent-section',
  GameOpponentSectionDead = 'game-screen__opponent-section--dead',
  GamePlayerInfo = 'game-screen__player-info-container',
  GameControls = 'game-screen__controls',
  GameControlsDisabled = 'game-screen__controls--disabled',
  GameButtonsContainer = 'game-screen__buttons-container',
  GameScreenButton = 'game-button__ready',
  GameActionLayer = 'game-screen__action-layer',
  SpellCasting = 'spell-casting',
  GameMessages = 'game-messages',
  GameMessagesItem = 'game-messages__item',
  DiceRolling = 'dice-rolling',
  DiceRollingWrapper = 'dice-rolling__wrapper',
  // target selection
  TargetSelection = 'target-selection',
  TargetSelectionTitle = 'target-selection__title',
  TargetsWrapper = 'target-selection__targets-wrapper',
  Target = 'target-selection__target',
  TargetImg = 'target-selection__img',
  TargetTitle = 'target-selection__target-title',
  TargetTimeContainer = 'target-selection__time-container',
  TargetTime = 'target-selection__time',
  // player cards
  PlayerCards = 'player-cards',
  PlayerCardsDisabled = 'player-cards--disabled',
  PlayerCardsHand = 'player-cards__hand-container',
  PlayerCardsSelected = 'player-cards__selected-cards-container',
  // overlay
  Overlay = 'overlay',
  BeforeAppend = 'overlay--before-append',
  BeforeRemove = 'overlay--before-remove',
  // win screen
  GameEndScreen = 'game-end-screen',
  GameEndWrapper = 'game-end__wrapper',
  GameEndTitle = 'game-end__title',
  PLayerContainer = 'game-end__player',
  ItemAvatar = 'item__avatar',
  // dice roller
  Dice = 'dice',
  DiceContainer = 'dice-container',
  DiceShadow = 'dice-shadow',
  DiceRoller = 'dice-roller',
  DiceRollerShow = 'dice-roller--show',
  DiceRollingAnimation = 'dice--rolling',
  // about project
  AboutScreen = 'about-screen',
  AboutContainer = 'about-screen__container',
  AboutHeaderImage = 'about-screen__header-image',
  AboutTitle = 'about-screen__title',
  AboutText = 'about-screen__text',
  AboutTeam = 'about-screen__team',
  AboutScreenButton = 'about-screen__button',
  TeamMateContainer = 'team-mate__container',
  // popup
  Popup = 'popup',
  PopupText = 'popup__text',
  PopupButton = 'popup__button',
  // player message
  PlayerMessage = 'player-message',
  PlayerMessageContent = 'player-message__content',
  PlayerMessageInit = 'player-message--init',
  // rules screen
  RulesScreen = 'rules-screen',
  RulesContainer = 'rules-screen__container',
  RulesHeaderImage = 'rules-screen__header-image',
  RulesTitle = 'rules-screen__title',
  RulesText = 'rules-screen__text',
  RulesScreenButton = 'rules-screen__button',
}
