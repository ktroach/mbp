import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
// import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const api = axios.create({
  baseURL: `https://kyle-sb-api.herokuapp.com/api/v1`,
});

function Stuff() {
  const columns = [
    { title: 'id', field: 'id', hidden: true },
    { title: 'Stuff Name', field: 'stuffName' },
    { title: 'Stuff Description', field: 'stuffDesc' },
    { title: 'Stuff Type', field: 'stuffType' },
  ];

  const [data, setData] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleRowAdd = (newData, resolve) => {
    const errorList = [];
    if (newData.stuffName === undefined) {
      errorList.push('Please enter name');
    }
    if (newData.stuffDesc === undefined) {
      errorList.push('Please enter description');
    }
    if (newData.stuffType === undefined) {
      errorList.push('Please enter type');
    }

    if (errorList.length < 1) {
      api
        .post('/stuff', newData)
        .then(res => {
          const dataToAdd = [...data];
          dataToAdd.push(newData);
          setData(dataToAdd);
          resolve();
          setErrorMessages([]);
          setIserror(false);
        })
        .catch(error => {
          setErrorMessages(['Failed to add item']);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  useEffect(() => {
    api
      .get('/stuff')
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log('Error');
      });
  }, []);

  const options = {
    actionsCellStyle: {
      width: '100%',
      padding: '16px',
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
    },
    actionsColumnIndex: 4,
    draggable: false,
    addRowPosition: 'first',
    headerStyle: { width: 90 },
    paging: true,
    pageSize: 10,
    showTextRowsSelected: false,
  };

  return (
    <>
      <div className="stuff-container">
        {/* <Grid container spacing={2}> */}
        {/* <Grid container spacing={1}> */}
        {/* <Grid item xs={3}></Grid> */}
        {/* <Grid item xs={6}> */}
        <div>
          {/* {iserror &&
                                <Alert severity="error">
                                    {errorMessages.map((msg, i) => {
                                        return <div key={i}>{msg}</div>
                                    })}
                                </Alert>
                            } */}
        </div>
        <MaterialTable
          title="Current Projects"
          columns={columns}
          data={data}
          icons={tableIcons}
          options={options}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                handleRowAdd(newData, resolve);
              }),
          }}
        />
        {/* </Grid> */}
        {/* <Grid item xs={3}></Grid> */}
        {/* </Grid> */}
      </div>
    </>
  );
}

export default Stuff;
