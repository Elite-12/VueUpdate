import Full from '@/container/Full'

// dashboard components
const Crypto = () => import('@/views/crypto/Crypto')
const Ecommerce = () => import('@/views/dashboard/Ecommerce')
const WebAnalytics = () => import('@/views/dashboard/WebAnalytics')
const Magazine = () => import('@/views/dashboard/Magazine')
const News = () => import('@/views/dashboard/News')
const Agency = () => import('@/views/dashboard/Agency')
const Saas = () => import('@/views/dashboard/Saas')

// Jufrah Customized
const AdminsList = () => import('@/views/admins/AdminsList')
const Categories = () => import('@/views/categories/Categories')
const AdminPermissions = () => import('@/views/permissions/AdminPermissions')
const FeaturedPackages = () => import('@/views/featured-packages/FeaturedPackages')
const AdsList = () => import('@/views/ads/AdsList')
const AdReports = () => import('@/views/ad-reports/Reports')
const Notifications = () => import('@/views/notifications/Notifications')
const Vouchers = () => import('@/views/vouchers/Vouchers')
const MobileAds = () => import('@/views/mobile-ads/MobileAds')
const ContactUs = () => import('@/views/contact-us/ContactUs')
const Terms = () => import('@/views/terms-conditions/Terms')
const FeaturedPackageMaker = () => import('@/views/featured-packages/FeaturedPackageMaker')

// Crypto components
const MarketCap = () => import('@/views/crypto/MarketCap')
const Wallet = () => import('@/views/crypto/Wallet')
const Trade = () => import('@/views/crypto/Trade')

// CRM components
const Projects = () => import('@/views/crm/Projects')
const ProjectDetails = () => import('@/views/crm/ProjectDetails')
const Clients = () => import('@/views/crm/Clients')
const Reports = () => import('@/views/crm/Reports')
const Dashboard = () => import('@/views/crm/Dashboard')

//courses components
const Courses = () => import('@/views/courses/Courses')
const CourseList = () => import('@/views/courses/CourseList')
const CoursesDetail = () => import('@/views/courses/CoursesDetail')
const SignIn = () => import('@/views/courses/SignIn')
const Payment = () => import('@/views/courses/Payment')

// Widgets component
const ChartWidgets = () => import('@/views/widgets/chart-widgets/ChartWidgets')
const UserWidgets = () => import('@/views/widgets/user-widgets/UserWidgets')

//Ecommerce Widgets
const Shop = () => import('@/views/ecommerce/Shop')
const ProductDetail = () => import('@/views/ecommerce/ProductDetail')
const AddProduct = () => import('@/views/ecommerce/AddProduct')
const EditProduct = () => import('@/views/ecommerce/EditProduct')
const EditDetail = () => import('@/views/ecommerce/EditDetail')
const Cart = () => import('@/views/ecommerce/Cart')
const Checkout = () => import('@/views/ecommerce/Checkout')
const CreditCard = () => import('@/views/ecommerce/CreditCard')

// Inbox component
const Inbox = () => import('@/views/inbox/Inbox')

// chat component
const Chat = () => import('@/views/chat/Chat')

// calendar components
const Calendar = () => import('@/views/calendar/Calendar')

// ui components
const AppBars = () => import('@/views/ui-elements/AppBars')
const Banners = () => import('@/views/ui-elements/Banners')
const ListItemGroups = () => import('@/views/ui-elements/ListItemGroups')
const SlideGroups = () => import('@/views/ui-elements/SlideGroups')
const Overlays = () => import('@/views/ui-elements/Overlays')
const ChipGroups = () => import('@/views/ui-elements/ChipGroups')
const FileInput = () => import('@/views/ui-elements/FileInput')
const ColorPickers = () => import('@/views/ui-elements/ColorPickers')
const Buttons = () => import('@/views/ui-elements/Buttons')
const Cards = () => import('@/views/ui-elements/Cards')
const Grid = () => import('@/views/ui-elements/Grid')
const Groups = () => import('@/views/ui-elements/Groups')
const Hover = () => import('@/views/ui-elements/Hover')
const Images = () => import('@/views/ui-elements/Images')
const List = () => import('@/views/ui-elements/List')
const Menu = () => import('@/views/ui-elements/Menu')
const Ratings = () => import('@/views/ui-elements/Ratings')
const Slider = () => import('@/views/ui-elements/Slider')
const Snackbar = () => import('@/views/ui-elements/Snackbar')
const Tooltip = () => import('@/views/ui-elements/Tooltip')
const Dialog = () => import('@/views/ui-elements/Dialog')
const Select = () => import('@/views/ui-elements/Select')
const Input = () => import('@/views/ui-elements/Input')
const Checkbox = () => import('@/views/ui-elements/Checkbox')
const Radio = () => import('@/views/ui-elements/Radio')
const Toolbar = () => import('@/views/ui-elements/Toolbar')
const Progress = () => import('@/views/ui-elements/Progress')
const Tabs = () => import('@/views/ui-elements/Tabs')
const Carousel = () => import('@/views/ui-elements/Carousel')
const Chips = () => import('@/views/ui-elements/Chips')
const Datepicker = () => import('@/views/ui-elements/Datepicker')
const Timepicker = () => import('@/views/ui-elements/Timepicker')

// chart components
const VueChartjs = () => import('@/views/charts/VueChartjs')
const VueEcharts = () => import('@/views/charts/VueEcharts')

// maps views
const GoogleMaps = () => import('@/views/maps/GoogleMaps')
const LeafletMaps = () => import('@/views/maps/LeafletMaps')

// Pages views
const Blank = () => import('@/views/pages/Blank')
const Blog = () => import('@/views/pages/Blog')
const Gallery = () => import('@/views/pages/Gallery')
const Pricing1 = () => import('@/views/pages/Pricing-1')
const Pricing2 = () => import('@/views/pages/Pricing-2')

// users views
const UserProfile = () => import('@/views/users/UserProfile')
const UsersList = () => import('@/views/users/UsersList')

// drag-drop components
const Vue2Dragula = () => import('@/views/drag-drop/Vue2Dragula')
const VueDraggable = () => import('@/views/drag-drop/Vuedraggable')
const VueDraggableResizeable = () => import('@/views/drag-drop/VueDraggableResizable')

// icons components
const Themify = () => import('@/views/icons/Themify')
const Material = () => import('@/views/icons/Material')

// editor components
const QuillEditor = () => import('@/views/editor/QuillEditor')
const WYSIWYG = () => import('@/views/editor/WYSIWYG')

// form componenets
const FormValidation = () => import('@/views/permissions/forms/FormValidation')
const Stepper = () => import('@/views/permissions/forms/Stepper')

// Data table componenets
const SimpleTable = () => import('@/views/tables/SimpleTable')
const Standard = () => import('@/views/tables/Standard')
const Slots = () => import('@/views/tables/Slots')
const SelectableRows = () => import('@/views/tables/SelectableRows')
const SearchWithText = () => import('@/views/tables/SearchWithText')

// Timelines component
const Usage = () => import('@/views/timelines/Usage')
const SmallDots = () => import('@/views/timelines/SmallDots')
const IconDots = () => import('@/views/timelines/IconDots')
const ColoredDots = () => import('@/views/timelines/ColoredDots')
const OppositeSlot = () => import('@/views/timelines/OppositeSlot')
const DenseAlert = () => import('@/views/timelines/DenseAlert')
const Advanced = () => import('@/views/timelines/Advanced')

// Treeview component
const Treeview = () => import('@/views/treeview/Treeview')

// Extensions components
const ImageCropper = () => import('@/views/extensions/ImageCropper')
const VideoPlayer = () => import('@/views/extensions/VideoPlayer')
const Dropzone = () => import('@/views/extensions/Dropzone')

export default [{
  path: '/',
  component: Full,
  redirect: '/dashboard',
  children: [
    {
      path: '/dashboard',
      component: Ecommerce,
      meta: {
        requiresAuth: true,
        title: 'message.dashboard',
        breadcrumb: false,
      },
    },
    {
      path: '/admins',
      component: AdminsList,
      meta: {
        requiresAuth: true,
        title: 'message.admins',
        breadcrumb: [
          {
            breadcrumbInactive: 'Admins',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },
    {
      path: '/categories',
      component: Categories,
      meta: {
        requiresAuth: true,
        title: 'message.categories',
        breadcrumb: [
          {
            breadcrumbInactive: 'Categories',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },
    {
      path: '/permissions',
      component: AdminPermissions,
      meta: {
        requiresAuth: true,
        title: 'message.permissions',
        breadcrumb: [
          {
            breadcrumbInactive: 'Permissions',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/featured-packages',
      component: FeaturedPackages,
      meta: {
        requiresAuth: true,
        title: 'message.featuredPackages',
        breadcrumb: [
          {
            breadcrumbInactive: 'Featured Packages',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/ads',
      component: AdsList,
      meta: {
        requiresAuth: true,
        title: 'message.ads',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ads',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/reports',
      component: AdReports,
      name: 'ad-reports',
      meta: {
        requiresAuth: true,
        title: 'message.reports',
        breadcrumb: [
          {
            breadcrumbInactive: 'Reports',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/notifications',
      component: Notifications,
      meta: {
        requiresAuth: true,
        title: 'message.notifications',
        breadcrumb: [
          {
            breadcrumbInactive: 'Notifications',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/vouchers',
      component: Vouchers,
      meta: {
        requiresAuth: true,
        title: 'message.vouchers',
        breadcrumb: [
          {
            breadcrumbInactive: 'Vouchers',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/mobile-ads',
      component: MobileAds,
      meta: {
        requiresAuth: true,
        title: 'message.mobileAds',
        breadcrumb: [
          {
            breadcrumbInactive: 'Mobile Ads',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/contact-us',
      component: ContactUs,
      name: 'contact-us',
      meta: {
        requiresAuth: true,
        title: 'message.contactUs',
        breadcrumb: [
          {
            breadcrumbInactive: 'Contact Us',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/terms',
      component: Terms,
      name: 'terms',
      meta: {
        requiresAuth: true,
        title: 'message.terms',
        breadcrumb: [
          {
            breadcrumbInactive: 'Terms & Conditions',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/featured-package-maker',
      component: FeaturedPackageMaker,
      meta: {
        requiresAuth: true,
        title: 'message.featuredPackagesMaker',
        breadcrumb: [
          {
            breadcrumbInactive: '',
          },
          {
            breadcrumbActive: '',
          },
        ],
      },
    },

    {
      path: '/default/dashboard/web-analytics',
      component: WebAnalytics,
      meta: {
        requiresAuth: true,
        title: 'message.webAnalytics',
        breadcrumb: false,
      },
    },
    {
      path: '/default/dashboard/magazine',
      component: Magazine,
      meta: {
        requiresAuth: true,
        title: 'message.magazine',
        breadcrumb: false,
      },
    },
    {
      path: '/default/dashboard/news',
      component: News,
      meta: {
        requiresAuth: true,
        title: 'message.news',
        breadcrumb: false,
      },
    },

    {
      path: '/default/dashboard/agency',
      component: Agency,
      meta: {
        requiresAuth: true,
        title: 'message.agency',
        breadcrumb: false,
      },
    },

    {
      component: Saas,
      path: '/default/dashboard/saas',
      meta: {
        requiresAuth: true,
        title: 'message.saas',
        breadcrumb: false,
      },
    },

    {
      path: '/default/dashboard/crypto',
      component: Crypto,
      meta: {
        requiresAuth: true,
        title: 'message.crypto',
        breadcrumb: [
          {
            breadcrumbInactive: 'Crypto /',
          },
          {
            breadcrumbActive: 'Crypto',
          },
        ],
      },
    },
    {
      path: '/default/crypto/market-cap',
      component: MarketCap,
      meta: {
        requiresAuth: true,
        title: 'message.marketCap',
        breadcrumb: [
          {
            breadcrumbInactive: 'Crypto /',
          },
          {
            breadcrumbActive: 'MarketCap',
          },
        ],
      },
    },
    {
      path: '/default/crypto/trade',
      component: Trade,
      meta: {
        requiresAuth: true,
        title: 'message.trade',
        breadcrumb: [
          {
            breadcrumbInactive: 'Crypto /',
          },
          {
            breadcrumbActive: 'Trade',
          },
        ],
      },
    },
    {
      path: '/default/crypto/wallet',
      component: Wallet,
      meta: {
        requiresAuth: true,
        title: 'message.wallet',
        breadcrumb: [
          {
            breadcrumbInactive: 'Crypto /',
          },
          {
            breadcrumbActive: 'Wallet',
          },
        ],
      },
    },

    {
      path: '/default/crm/projects',
      component: Projects,
      meta: {
        requiresAuth: true,
        title: 'message.projects',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'Projects',
          },
        ],
      },
    },

    {
      path: '/default/crm/projectDetails/:id',
      component: ProjectDetails,
      meta: {
        requiresAuth: true,
        title: 'message.projectDetails',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'Project Details',
          },
        ],
      },
    },

    {
      path: '/default/crm/clients',
      component: Clients,
      meta: {
        requiresAuth: true,
        title: 'message.clients',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'Clients',
          },
        ],
      },
    },

    {
      path: '/default/crm/reports',
      component: Reports,
      meta: {
        requiresAuth: true,
        title: 'message.reports',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'Reports',
          },
        ],
      },
    },
    {
      path: '/default/dashboard/crm',
      component: Dashboard,
      meta: {
        requiresAuth: true,
        title: 'message.dashboard',
        breadcrumb: [
          {
            breadcrumbInactive: 'CRM /',
          },
          {
            breadcrumbActive: 'Dashboard',
          },
        ],
      },
    },

    {
      path: '/default/courses',
      component: Courses,
      meta: {
        requiresAuth: true,
        title: 'message.courses',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'Courses',
          },
        ],
      },
    },
    {
      path: '/default/courses/courses-list',
      component: CourseList,
      meta: {
        requiresAuth: true,
        title: 'message.coursesList',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'List',
          },
        ],
      },
    },
    {
      path: '/default/courses/courses-detail',
      component: CoursesDetail,
      meta: {
        requiresAuth: true,
        title: 'message.courseDetail',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'Detail',
          },
        ],
      },
    },
    {
      path: '/default/courses/sign-in',
      component: SignIn,
      meta: {
        requiresAuth: true,
        title: 'message.signIn',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'Sign In',
          },
        ],
      },
    },
    {
      path: '/default/courses/payment',
      component: Payment,
      meta: {
        requiresAuth: true,
        title: 'message.payment',
        breadcrumb: [
          {
            breadcrumbInactive: 'Courses /',
          },
          {
            breadcrumbActive: 'Payment',
          },
        ],
      },
    },
    {
      path: '/default/widgets/user-widgets',
      component: UserWidgets,
      meta: {
        requiresAuth: true,
        title: 'message.user',
        breadcrumb: [
          {
            breadcrumbInactive: 'Widgets /',
          },
          {
            breadcrumbActive: 'User',
          },
        ],
      },
    },
    {
      path: '/default/widgets/chart-widgets',
      component: ChartWidgets,
      meta: {
        requiresAuth: true,
        title: 'message.charts',
        breadcrumb: [
          {
            breadcrumbInactive: 'Widgets /',
          },
          {
            breadcrumbActive: 'Charts',
          },
        ],
      },
    },

    {
      path: '/default/ecommerce/shop',
      component: Shop,
      meta: {
        requiresAuth: true,
        title: 'message.shop',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Shop',
          },
        ],
      },
    },
    {
      path: '/default/ecommerce/product-detail/:category/:id',
      component: ProductDetail,
      meta: {
        requiresAuth: true,
        title: 'message.productDetail',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Product Detail',
          },
        ],
      },
    },
    {
      path: '/default/ecommerce/add-product',
      component: AddProduct,
      meta: {
        requiresAuth: true,
        title: 'message.addProduct',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Add Product',
          },
        ],
      },
    },
    {
      path: '/default/ecommerce/edit-product',
      component: EditProduct,
      meta: {
        requiresAuth: true,
        title: 'message.editProduct',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Edit Product',
          },
        ],
      },
    },
    {
      path: '/default/ecommerce/edit-detail/:category/:id',
      component: EditDetail,
      meta: {
        requiresAuth: true,
        title: 'message.editDetail',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Edit Detail',
          },
        ],
      },
    },
    {
      path: '/default/ecommerce/cart',
      component: Cart,
      meta: {
        requiresAuth: true,
        title: 'message.cart',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Cart',
          },
        ],
      },
    },
    {
      path: '/default/ecommerce/checkout',
      component: Checkout,
      meta: {
        requiresAuth: true,
        title: 'message.checkout',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Checkout',
          },
        ],
      },
    },
    {
      path: '/default/ecommerce/cards',
      component: CreditCard,
      meta: {
        requiresAuth: true,
        title: 'message.cards',
        breadcrumb: [
          {
            breadcrumbInactive: 'Ecommerce /',
          },
          {
            breadcrumbActive: 'Cards',
          },
        ],
      },
    },
    {
      path: '/default/inbox',
      component: Inbox,
      meta: {
        requiresAuth: true,
        title: 'message.inbox',
        breadcrumb: false,
      },
    },
    {
      path: '/default/treeview',
      component: Treeview,
      meta: {
        requiresAuth: true,
        title: 'message.treeview',
        breadcrumb: [
          {
            breadcrumbInactive: null,
          },
          {
            breadcrumbActive: 'Treeview',
          },
        ],
      },
    },
    // Timelines Components
    {
      path: '/default/timelines/usage',
      component: Usage,
      meta: {
        requiresAuth: true,
        title: 'message.usage',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Usage',
          },
        ],
      },
    },
    {
      path: '/default/timelines/smalldots',
      component: SmallDots,
      meta: {
        requiresAuth: true,
        title: 'message.smallDots',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Small Dots',
          },
        ],
      },
    },
    {
      path: '/default/timelines/icondots',
      component: IconDots,
      meta: {
        requiresAuth: true,
        title: 'message.iconDots',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Icon Dots',
          },
        ],
      },
    },
    {
      path: '/default/timelines/coloreddots',
      component: ColoredDots,
      meta: {
        requiresAuth: true,
        title: 'message.coloredDots',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Colored Dots',
          },
        ],
      },
    },
    {
      path: '/default/timelines/oppositeslot',
      component: OppositeSlot,
      meta: {
        requiresAuth: true,
        title: 'message.oppositeSlot',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Opposite Slot',
          },
        ],
      },
    },
    {
      path: '/default/timelines/densealert',
      component: DenseAlert,
      meta: {
        requiresAuth: true,
        title: 'message.denseAlert',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Dense Alert',
          },
        ],
      },
    },
    {
      path: '/default/timelines/advanced',
      component: Advanced,
      meta: {
        requiresAuth: true,
        title: 'message.advanced',
        breadcrumb: [
          {
            breadcrumbInactive: 'Timelines /',
          },
          {
            breadcrumbActive: 'Advanced',
          },
        ],
      },
    },
    {
      path: '/default/chat',
      component: Chat,
      meta: {
        requiresAuth: true,
        title: 'message.chat',
        breadcrumb: false,
      },
    },
    {
      path: '/default/calendar',
      component: Calendar,
      meta: {
        requiresAuth: true,
        title: 'message.calendar',
        breadcrumb: [
          {
            breadcrumbInactive: '',
          },
          {
            breadcrumbActive: 'Calendar',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/app-bars',
      component: AppBars,
      meta: {
        requiresAuth: true,
        title: 'message.appBars',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'App Bars',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/banners',
      component: Banners,
      meta: {
        requiresAuth: true,
        title: 'message.banners',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Banners',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/list-item-groups',
      component: ListItemGroups,
      meta: {
        requiresAuth: true,
        title: 'message.listItemGroups',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'List Item Groups',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/slide-groups',
      component: SlideGroups,
      meta: {
        requiresAuth: true,
        title: 'message.slideGroups',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Slide Groups',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/chip-groups',
      component: ChipGroups,
      meta: {
        requiresAuth: true,
        title: 'message.chipGroups',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Chip Groups',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/overlays',
      component: Overlays,
      meta: {
        requiresAuth: true,
        title: 'message.overlays',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'overlays',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/file-input',
      component: FileInput,
      meta: {
        requiresAuth: true,
        title: 'message.fileInput',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'File Input',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/color-pickers',
      component: ColorPickers,
      meta: {
        requiresAuth: true,
        title: 'message.colorPickers',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Color Picker',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/buttons',
      component: Buttons,
      meta: {
        requiresAuth: true,
        title: 'message.buttons',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Buttons',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/cards',
      component: Cards,
      meta: {
        requiresAuth: true,
        title: 'message.cards',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Cards',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/grid',
      component: Grid,
      meta: {
        requiresAuth: true,
        title: 'message.grid',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Grid',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/groups',
      component: Groups,
      meta: {
        requiresAuth: true,
        title: 'message.groups',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Groups',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/hover',
      component: Hover,
      meta: {
        requiresAuth: true,
        title: 'message.hover',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Hover',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/images',
      component: Images,
      meta: {
        requiresAuth: true,
        title: 'message.images',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Images',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/list',
      component: List,
      meta: {
        requiresAuth: true,
        title: 'message.list',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'List',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/menu',
      component: Menu,
      meta: {
        requiresAuth: true,
        title: 'message.menu',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Menu',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/ratings',
      component: Ratings,
      meta: {
        requiresAuth: true,
        title: 'message.ratings',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Ratings',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/slider',
      component: Slider,
      meta: {
        requiresAuth: true,
        title: 'message.slider',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Slider',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/snackbar',
      component: Snackbar,
      meta: {
        requiresAuth: true,
        title: 'message.snackbar',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Snackbar',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/tooltip',
      component: Tooltip,
      meta: {
        requiresAuth: true,
        title: 'message.tooltip',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Tooltip',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/dialog',
      component: Dialog,
      meta: {
        requiresAuth: true,
        title: 'message.dialog',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Dialog',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/select',
      component: Select,
      meta: {
        requiresAuth: true,
        title: 'message.select',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Select',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/input',
      component: Input,
      meta: {
        requiresAuth: true,
        title: 'message.input',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Input',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/checkbox',
      component: Checkbox,
      meta: {
        requiresAuth: true,
        title: 'message.checkbox',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Checkbox',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/radio',
      component: Radio,
      meta: {
        requiresAuth: true,
        title: 'message.radio',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Radio',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/toolbar',
      component: Toolbar,
      meta: {
        requiresAuth: true,
        title: 'message.toolbar',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Toolbar',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/progress',
      component: Progress,
      meta: {
        requiresAuth: true,
        title: 'message.progress',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Progress',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/tabs',
      component: Tabs,
      meta: {
        requiresAuth: true,
        title: 'message.tabs',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Tabs',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/carousel',
      component: Carousel,
      meta: {
        requiresAuth: true,
        title: 'message.carousel',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Carousel',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/chips',
      component: Chips,
      meta: {
        requiresAuth: true,
        title: 'message.chips',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Chips',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/datepicker',
      component: Datepicker,
      meta: {
        requiresAuth: true,
        title: 'message.datepicker',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Datepicker',
          },
        ],
      },
    },
    {
      path: '/default/ui-elements/timepicker',
      component: Timepicker,
      meta: {
        requiresAuth: true,
        title: 'message.timepicker',
        breadcrumb: [
          {
            breadcrumbInactive: 'UI Elements /',
          },
          {
            breadcrumbActive: 'Timepicker',
          },
        ],
      },
    },
    // chart views
    {
      path: '/default/charts/vue-chartjs',
      component: VueChartjs,
      meta: {
        requiresAuth: true,
        title: 'message.vueChartjs',
        breadcrumb: [
          {
            breadcrumbInactive: 'Charts /',
          },
          {
            breadcrumbActive: 'Vue Chartjs',
          },
        ],
      },
    },
    {
      path: '/default/charts/vue-echarts',
      component: VueEcharts,
      meta: {
        requiresAuth: true,
        title: 'message.vueEcharts',
        breadcrumb: [
          {
            breadcrumbInactive: 'Charts /',
          },
          {
            breadcrumbActive: 'Vue Echarts',
          },
        ],
      },
    },
    // google maps
    {
      path: '/default/maps/google-maps',
      component: GoogleMaps,
      meta: {
        requiresAuth: true,
        title: 'message.googleMaps',
        breadcrumb: [
          {
            breadcrumbInactive: 'Maps /',
          },
          {
            breadcrumbActive: 'Google Map',
          },
        ],
      },
    },
    {
      path: '/default/maps/leaflet-maps',
      component: LeafletMaps,
      meta: {
        requiresAuth: true,
        title: 'message.leafletMaps',
        breadcrumb: [
          {
            breadcrumbInactive: 'Maps /',
          },
          {
            breadcrumbActive: 'Leaflet Map',
          },
        ],
      },
    },
    // pages
    {
      path: '/default/pages/gallery',
      component: Gallery,
      meta: {
        requiresAuth: true,
        title: 'message.gallery',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Gallery',
          },
        ],
      },
    },
    {
      path: '/default/pages/blog',
      component: Blog,
      meta: {
        requiresAuth: true,
        title: 'message.blog',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Blog',
          },
        ],
      },
    },
    {
      path: '/default/pages/pricing-1',
      component: Pricing1,
      meta: {
        requiresAuth: true,
        title: 'message.pricing1',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Pricing-1',
          },
        ],
      },
    },
    {
      path: '/default/pages/pricing-2',
      component: Pricing2,
      meta: {
        requiresAuth: true,
        title: 'message.pricing2',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Pricing-2',
          },
        ],
      },
    },
    {
      path: '/default/pages/blank',
      component: Blank,
      meta: {
        requiresAuth: true,
        title: 'message.blank',
        breadcrumb: [
          {
            breadcrumbInactive: 'Pages /',
          },
          {
            breadcrumbActive: 'Blank',
          },
        ],
      },
    },
    // users
    {
      path: '/admins/profile',
      component: UserProfile,
      meta: {
        requiresAuth: true,
        title: 'message.adminProfile',
        breadcrumb: [
          {
            breadcrumbInactive: 'Users /',
          },
          {
            breadcrumbActive: 'User Profile',
          },
        ],
      },
    },
    {
      path: '/users',
      component: UsersList,
      meta: {
        requiresAuth: true,
        title: 'message.usersList',
        breadcrumb: [
          {
            breadcrumbInactive: 'Users /',
          },
          {
            breadcrumbActive: 'Users List',
          },
        ],
      },
    },
    // drag and drop
    {
      path: '/default/drag-drop/vue2dragula',
      component: Vue2Dragula,
      meta: {
        requiresAuth: true,
        title: 'message.vue2Dragula',
        breadcrumb: [
          {
            breadcrumbInactive: 'Drag And Drop /',
          },
          {
            breadcrumbActive: 'Vue2 Dragula',
          },
        ],
      },
    },
    {
      path: '/default/drag-drop/vuedraggable',
      component: VueDraggable,
      meta: {
        requiresAuth: true,
        title: 'message.vueDraggable',
        breadcrumb: [
          {
            breadcrumbInactive: 'Drag And Drop /',
          },
          {
            breadcrumbActive: 'Vue Draggable',
          },
        ],
      },
    },
    {
      path: '/default/drag-drop/vuedraggableresizeable',
      component: VueDraggableResizeable,
      meta: {
        requiresAuth: true,
        title: 'message.draggableResizeable',
        breadcrumb: [
          {
            breadcrumbInactive: 'Drag And Drop /',
          },
          {
            breadcrumbActive: 'Draggable Resizeable',
          },
        ],
      },
    },
    // icons
    {
      path: '/default/icons/themify',
      component: Themify,
      meta: {
        requiresAuth: true,
        title: 'message.themify',
        breadcrumb: [
          {
            breadcrumbInactive: 'Icons /',
          },
          {
            breadcrumbActive: 'Themify',
          },
        ],
      },
    },
    {
      path: '/default/icons/material',
      component: Material,
      meta: {
        requiresAuth: true,
        title: 'message.material',
        breadcrumb: [
          {
            breadcrumbInactive: 'Icons /',
          },
          {
            breadcrumbActive: 'Material',
          },
        ],
      },
    },
    // editor components
    {
      path: '/default/editor/quilleditor',
      component: QuillEditor,
      meta: {
        requiresAuth: true,
        title: 'message.quillEditor',
        breadcrumb: [
          {
            breadcrumbInactive: 'Editor /',
          },
          {
            breadcrumbActive: 'Quill Editor',
          },
        ],
      },
    },
    {
      path: '/default/editor/wysiwyg',
      component: WYSIWYG,
      meta: {
        requiresAuth: true,
        title: 'message.wYSIWYG',
        breadcrumb: [
          {
            breadcrumbInactive: 'Editor /',
          },
          {
            breadcrumbActive: 'WYSIWYG',
          },
        ],
      },
    },
    // forms components
    {
      path: '/default/permissions/forms/form-validation',
      component: FormValidation,
      meta: {
        requiresAuth: true,
        title: 'message.formValidation',
        breadcrumb: [
          {
            breadcrumbInactive: 'Forms /',
          },
          {
            breadcrumbActive: 'FormValidation',
          },
        ],
      },
    },
    // forms components
    {
      path: '/default/permissions/forms/stepper',
      component: Stepper,
      meta: {
        requiresAuth: true,
        title: 'message.stepper',
        breadcrumb: [
          {
            breadcrumbInactive: 'Forms /',
          },
          {
            breadcrumbActive: 'Stepper',
          },
        ],
      },
    },
    // Data tables component
    {
      path: '/default/tables/simple',
      component: SimpleTable,
      meta: {
        requiresAuth: true,
        title: 'message.simpleTable',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Simple',
          },
        ],
      },
    },
    {
      path: '/default/tables/standard',
      component: Standard,
      meta: {
        requiresAuth: true,
        title: 'message.standard',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Standard',
          },
        ],
      },
    },
    {
      path: '/default/tables/slots',
      component: Slots,
      meta: {
        requiresAuth: true,
        title: 'message.slots',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Slots',
          },
        ],
      },
    },
    {
      path: '/default/tables/selectablerows',
      component: SelectableRows,
      meta: {
        requiresAuth: true,
        title: 'message.selectable',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Selectable Rows',
          },
        ],
      },
    },
    {
      path: '/default/tables/searchwithtext',
      component: SearchWithText,
      meta: {
        requiresAuth: true,
        title: 'message.searchRow',
        breadcrumb: [
          {
            breadcrumbInactive: 'Tables /',
          },
          {
            breadcrumbActive: 'Search Row',
          },
        ],
      },
    },
    {
      path: '/default/image-cropper',
      component: ImageCropper,
      meta: {
        requiresAuth: true,
        title: 'message.imageCropper',
        breadcrumb: [
          {
            breadcrumbInactive: 'Extensions /',
          },
          {
            breadcrumbActive: 'Image Cropper',
          },
        ],
      },
    },
    {
      path: '/default/video-player',
      component: VideoPlayer,
      meta: {
        requiresAuth: true,
        title: 'message.videoPlayer',
        breadcrumb: [
          {
            breadcrumbInactive: 'Extensions /',
          },
          {
            breadcrumbActive: 'Video Player',
          },
        ],
      },
    },
    {
      path: '/default/dropzone',
      component: Dropzone,
      meta: {
        requiresAuth: true,
        title: 'message.dropzone',
        breadcrumb: [
          {
            breadcrumbInactive: 'Extensions /',
          },
          {
            breadcrumbActive: 'Dropzone',
          },
        ],
      },
    },
  ],
}
];