import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddCourse from './components/Dashboard/AddCourse/AddCourse';
import AddOrder from './components/Dashboard/AddOrder/AddOrder';
import AddReview from './components/Dashboard/AddReview/AddReview';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageCourse from './components/Dashboard/ManageCourse/ManageCourse';
import OrderList from './components/Dashboard/OrderList/OrderList';
import UserOrder from './components/Dashboard/UserOrder/UserOrder';
import Courses from './components/Home/Courses/Courses';
import Home from './components/Home/Home/Home';
import Team from './components/Home/Team/Team';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import MainNav from './components/Shared/MainNav/MainNav';

export const UserContext = createContext()
export const CourseContext = createContext()
export const AdminContext = createContext()
function App() {
  const [courseDetails, setCourseDetails] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <CourseContext.Provider value={[courseDetails, setCourseDetails]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
          <Router>
            <MainNav></MainNav>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/courses">
                <Courses></Courses>
              </Route>
              <Route path="/team">
                <Team></Team>
              </Route>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/add-order">
                <AddOrder></AddOrder>
              </PrivateRoute>
              <PrivateRoute path="/user-order">
                <UserOrder></UserOrder>
              </PrivateRoute>
              <PrivateRoute path="/add-review">
                <AddReview></AddReview>
              </PrivateRoute>
              <PrivateRoute path="/course/addCourse">
                <AddCourse></AddCourse>
              </PrivateRoute>
              <PrivateRoute path="/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </PrivateRoute>
              <PrivateRoute path="/orderList">
                <OrderList></OrderList>
              </PrivateRoute>
              <PrivateRoute path="/manageCourse">
                <ManageCourse></ManageCourse>
              </PrivateRoute>
            </Switch>
            <Footer></Footer>
          </Router>
        </AdminContext.Provider>
      </UserContext.Provider>
    </CourseContext.Provider>
  );
}
export default App;
