import * as React from "react";
import { Admin, Resource, Create, SimpleForm, TextInput,TextField } from 'react-admin'
import { Datagrid,List, Edit, EditButton , DeleteButton } from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://ri07ibuo1g.execute-api.us-west-2.amazonaws.com/dev/');

const Dashboard= (props) => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
  </Card>
)

const StageList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="archived" />
          <EditButton />
          <DeleteButton />
      </Datagrid>
  </List>
);

const StageCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="archived" />
      </SimpleForm>
  </Create>
);

const StageEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="archived" />
      </SimpleForm>
  </Edit>
);

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource name="stage" list={StageList} edit={StageEdit} create={StageCreate} />
  </Admin>
);

export default App;