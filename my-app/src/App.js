//import { useEffect } from "react";
import { Route, HashRouter} from "react-router-dom";
import Api from "./Api";
import RegisterForm from "./components/Auth/RegisterForm";
import AuthForm from "./components/Auth/AuthForm";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import VerbalTestOne from "./components/AptitudeTests/VerbalTestOne";
import VerbalTestTwo from "./components/AptitudeTests/VerbalTestTwo";
import VerbalTestThree from "./components/AptitudeTests/VerbalTestThree";
import QuantitativeTestOne from "./components/AptitudeTests/QuantitativeTestOne";
import QuantitativeTestTwo from "./components/AptitudeTests/QuantitativeTestTwo";
import QuantitativeTestThree from "./components/AptitudeTests/QuantitativeTestThree";
/** Navbar link: https://blog.logrocket.com/create-responsive-navbar-react-css/ */
import Layout from "./components/UI/Layout";
//import icon from './images/favicon.ico';
///https://www.django-rest-framework.org/tutorial/1-serialization/
//https://devcenter.heroku.com/articles/getting-started-with-python#set-up
//https://stackoverflow.com/questions/54865159/how-to-add-favicon-to-django-app-with-react-front-end

function App() {
//   useEffect(() => {
//     const favicon = document.getElementById('favicon');
//     favicon.setAttribute('href', icon);
// }, []);
  return (
    <HashRouter>
    <Layout>
        <Route path='/' component={HomePage} exact/>
        <Route path="/auth" component={AuthForm} />
        <Route path='/my-app' component={Api} />  
        <Route path='/register' component={RegisterForm} />
        <Route path='/verbalTestOne' component={VerbalTestOne} />
        <Route path='/verbalTestTwo' component={VerbalTestTwo} />
        <Route path='/verbalTestThree' component={VerbalTestThree} />
        <Route path='/quantitativeTestOne' component={QuantitativeTestOne} />
        <Route path='/quantitativeTestTwo' component={QuantitativeTestTwo} />
        <Route path='/quantitativeTestThree' component={QuantitativeTestThree} />
        <Route path='/contact' component={ContactPage} />
    </Layout>
    </HashRouter>
  );
}

export default App;