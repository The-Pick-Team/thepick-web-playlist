import { Route, Switch } from 'react-router-dom';
import React from 'react';

import { Main } from 'domains/Main/Main';
import { ROUTE_PATHS } from 'app/routes/routePaths';

export function AppRoutes() {
  return (
    <Switch>
      <Route path={ROUTE_PATHS.MAIN} exact={true} component={Main} />
    </Switch>
  );
}
