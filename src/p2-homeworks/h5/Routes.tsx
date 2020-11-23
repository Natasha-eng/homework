import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/Junior+";
import c from"./Router.module.css"

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/JUNIOR",
    JUNIOR_PLUS: "/JuniorPlus"
    // add paths
}

function Routes() {

    return (
        <div className={c.RouterWrapper}>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совпадение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                // add routes
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    );
}

export default Routes;
