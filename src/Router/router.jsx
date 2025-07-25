import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import CreateStudySession from "../Pages/Dashboard/CreateStudySession/CreateStudySession";
import ViewAllStudy from "../Pages/Dashboard/ViewAllStudy/ViewAllStudy";
import UploadMaterials from "../Pages/Dashboard/UploadMaterials/UploadMaterials";
import ViewAllMaterials from "../Pages/Dashboard/ViewAllMaterials/ViewAllMaterials";
import ManagePersonalNotes from "../Pages/Dashboard/StudentRoute/ManagePersonalNotes/ManagePersonalNotes";
import ViewAllUsers from "../Pages/Dashboard/Admin/ViewAllUsers/ViewAllUsers";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import PrivateRoutes from "../routes/Privateroutes";
import DashboardHome from "../Pages/Dashboard/DashBoardHome/DashboardHome";
import Forbidden from "../Pages/Dashboard/Forbidden/Forbidden";
import AdminRoutes from "../routes/AdminRoutes";
import ViewAllStudyAdmin from "../Pages/Dashboard/Admin/ViewAllStudyAdmin/ViewAllStudyAdmin";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Payment from "../Pages/Payment/Payment";
import StudentRoutes from "../routes/StudentRoutes";
import CreateNote from "../Pages/Dashboard/StudentRoute/CreateNote/CreateNote";
import ViewBookedSession from "../Pages/Dashboard/StudentRoute/ViewBookedSession/ViewBookedSession";
import ViewAllStudyStudent from "../Pages/Dashboard/StudentRoute/ViewAllStudy/ViewAllStudyStudent";
import ViewAllMaterialsAdmin from "../Pages/Dashboard/Admin/ViewAllMaterialsAdmin/ViewAllMaterialsAdmin";
import Tutors from "../Pages/shared/Tutors/Tutors";
import StudySessions from "../Pages/Home/StudySessions";
// import AdminDashboard from "../Pages/Dashboard/DashBoardHome/AdminDashboard";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import StudentProfile from "../Pages/Dashboard/StudentRoute/StudentProfile/StudentProfile";
import TutorRoutes from "../routes/TutorRoutes";
import TutorProfile from "../Pages/Dashboard/TutorProfile/TutorProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
            path: '/view-details/:id',
            Component: ViewDetails
        },
        {
            path: 'forbidden',
            Component: Forbidden
        },
        {
            path: 'tutors',
            Component: Tutors
        },
        {
            path: 'all-study-sessions',
            Component: StudySessions
        },
        {
            path: 'payment',
            Component: Payment
        },

    ]
  },
  {
        path: '/',
        element: <AuthLayout/>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'signup',
                Component: SignUp
            }
        ]
  },



  {
      path: '/dashboard',
      element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
      children: [
          // tutor routes
            {
                index: true,
                Component: DashboardHome
            },
        
          {
              path: 'createStudySession',
              element: <TutorRoutes><CreateStudySession></CreateStudySession></TutorRoutes>
          },
          {
              path: 'viewAllStudy',
              element: <TutorRoutes><ViewAllStudy></ViewAllStudy></TutorRoutes>
          },
          {
              path: 'uploadMaterials',
              element: <TutorRoutes><UploadMaterials></UploadMaterials></TutorRoutes>
          },
          //  {/* all user are defined like tutor, student, admin */}
          {
              path: 'viewAllMaterials',
              element: <TutorRoutes><ViewAllMaterials></ViewAllMaterials></TutorRoutes>
          },
          {
              path: 'tutor-profile',
              element: <TutorRoutes><TutorProfile></TutorProfile></TutorRoutes>
          },

          // student define 
          
          {
              path: 'viewBookedSession',
              element: <StudentRoutes><ViewBookedSession></ViewBookedSession></StudentRoutes>
          },
          {
              path: 'createNote',
              element: <StudentRoutes><CreateNote></CreateNote></StudentRoutes>
              
          },
          {
              path: 'managePersonalNotes',
              element: <StudentRoutes><ManagePersonalNotes></ManagePersonalNotes></StudentRoutes>
          },
          {
              path: 'viewAllStudy/student',
              element: <StudentRoutes><ViewAllStudyStudent></ViewAllStudyStudent></StudentRoutes>
          },

          {
              path: 'student-profile',
              element: <StudentRoutes><StudentProfile></StudentProfile></StudentRoutes>
          },


          //Admin only Routes
        //   {
        //       path: 'adminDashboard',
        //       element: <AdminRoutes><AdminDashboard></AdminDashboard></AdminRoutes>
        //   },
          {
              path: 'viewAllUsers',
              element: <AdminRoutes><ViewAllUsers></ViewAllUsers></AdminRoutes>
          },
          {
              path: 'viewAllStudyAdmin',
              element: <AdminRoutes><ViewAllStudyAdmin></ViewAllStudyAdmin></AdminRoutes>
          },
          {
              path: 'view-all-materials-admin',
              element: <AdminRoutes><ViewAllMaterialsAdmin></ViewAllMaterialsAdmin></AdminRoutes>
          },
          {
              path: 'admin-profile',
              element: <AdminRoutes><AdminProfile></AdminProfile></AdminRoutes>
          },

      ]
          
      
      
  }
]);