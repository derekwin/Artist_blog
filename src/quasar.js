import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'

import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QExpansionItem,
  QFooter,
  
  QTabs,
  QTab,
  QRouteTab,

  QSpace,

  QBtnDropdown,
  
  QImg,

  QParallax,

  QTimeline,
  QTimelineEntry,

  QCard,
  QCardSection,
  QCardActions,

  QSeparator,

  QChip,

  QAvatar,

  QMenu,
  ClosePopup,

  QCarousel,
  QCarouselControl,
  QCarouselSlide,

  QBadge,

  QBreadcrumbs,
  QBreadcrumbsEl,

  QInput,

  QSplitter,

  QPageScroller,

  QFab,
  QFabAction,

  QPageSticky,

  QDate,
  QPopupProxy,


} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QExpansionItem,
    QFooter,
    
    QTabs,
    QTab,
    QRouteTab,
  
    QSpace,

    QBtnDropdown,

    QImg,

    QParallax,

    QTimeline,
    QTimelineEntry,

    QCard,
    QCardSection,
    QCardActions,

    QSeparator,

    QChip,

    QAvatar,

    QMenu,
    ClosePopup,

    QCarousel,
    QCarouselControl,
    QCarouselSlide,

    QBadge,
    
    QBreadcrumbs,
    QBreadcrumbsEl,

    QInput,

    QSplitter,

    QPageScroller,

    QPageSticky,

    QFab,
    QFabAction,

    QDate,
    QPopupProxy,
  
  },
  directives: {
    
  },
  plugins: {
  },
 })