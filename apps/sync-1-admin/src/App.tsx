import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { E2List } from "./e2/E2List";
import { E2Create } from "./e2/E2Create";
import { E2Edit } from "./e2/E2Edit";
import { E2Show } from "./e2/E2Show";
import { E3List } from "./e3/E3List";
import { E3Create } from "./e3/E3Create";
import { E3Edit } from "./e3/E3Edit";
import { E3Show } from "./e3/E3Show";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"sync1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="E2"
          list={E2List}
          edit={E2Edit}
          create={E2Create}
          show={E2Show}
        />
        <Resource
          name="E3"
          list={E3List}
          edit={E3Edit}
          create={E3Create}
          show={E3Show}
        />
      </Admin>
    </div>
  );
};

export default App;
