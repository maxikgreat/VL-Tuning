import React from 'react'
import {Switch, Link, Route, useRouteMatch} from 'react-router-dom'
import ChangeRecord from './ChangeRecord'
import CreateRecord from './CreateRecord'
import {useSelector} from "react-redux";


const AdminPanel = () => {

    const choseStuff = useSelector(state => state.choseStuff)

    const {path, url} = useRouteMatch()

    return(
        <section className="admin">
            <Switch>
                <Route exact path={`${path}`}>
                    <h1>Select option</h1>
                    <div className="optionsContainer">
                        <Link to={`${path}/change-record`}>Change record</Link>
                        <Link to={`${path}/create-record`}>Create new record</Link>
                    </div>
                </Route>
                <Route path = {`${path}/change-record`}>
                    <ChangeRecord
                        stuff={choseStuff.stuff}
                        brand={choseStuff.brand}
                        model={choseStuff.model}
                    />
                </Route>
                <Route path = {`${path}/create-record`}>
                    <CreateRecord/>
                </Route>
            </Switch>
        </section>
    )
}

export default AdminPanel