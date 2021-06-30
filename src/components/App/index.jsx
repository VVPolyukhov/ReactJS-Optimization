import React from "react";
import { Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";

// Без оптимизации

// import Messenger from "../Messenger";
// import Cats from "../Cats";
// import FastCats from "../FastCats";
// import HeavySection from "../HeavySection";
// import Memo from "../Memo";

// === //

// С оптимизацией

const Messenger = React.lazy(() => import("../Messenger"));
const Cats = React.lazy(() => import("../Cats"));
const FastCats = React.lazy(() => import("../FastCats"));
const HeavySection = React.lazy(() => import("../HeavySection"));
const Memo = React.lazy(() => import("../Memo"));

// === //

const App = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div style={{ display: "grid" }}>
              <Link to="/messanger">Чат</Link>
              <Link to="/cats">Котики</Link>
              <Link to="/fast-cats">Быстрые котики</Link>
              <Link to="/heavy-section">Тяжеловесный раздел</Link>
              <Link to="/memo">Memo</Link>
            </div>
          )}
        />
        <Route path="/messanger" render={() => <Messenger />} />
        <Route path="/cats" render={() => <Cats />} />
        <Route path="/fast-cats" render={() => <FastCats />} />
        <Route path="/heavy-section" render={() => <HeavySection />} />
        <Route path="/memo" render={() => <Memo />} />
        <Route render={() => <div>404</div>} />
      </Switch>
    </Suspense>
  );
};

export default App;
