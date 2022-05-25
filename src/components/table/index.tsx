import "./index.css";
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbarExport, GridToolbarContainer } from '@material-ui/data-grid';
import axios from "axios";


/* Html Veri Ekleme */

//! Birleştirmw
function getFullName(params:any) {
  return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

 //! Link
function getLink(params:any) { 
  return <a href={`${params.row.link}`}>Link</a>;
}

//! Yazı
function getText(params:any) { 
  return <a> {params.row.category} </a>;
}

//! Resim
function getImage(params:any) {
  return <img  style={{ width: "50px", height:"50px", borderRadius:"50%" }} src={params.row.image} />;
}

//! Div Kullanma
function getDiv(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> <a> {params.row.firstName} </a> <a> {params.row.lastName} </a> </div>;
}

/* Html Veri Ekleme */

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'link', headerName: 'LINK', width: 250,  renderCell:getLink, editable: false},
  { field: 'image', headerName: 'IMG', width: 250,  renderCell: getImage, editable: false },
  { field: 'category', headerName: 'Kategoriler',  width: 200,   editable: false},
  { field: 'lastName', headerName: 'Last name', width: 200, editable: false },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: false },
  { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', 
    sortable: false, width: 160, valueGetter: getFullName, },
];


//! Export
function MyExportButton() {
  return (<GridToolbarContainer style={{justifyContent: 'flex-end'}}>
        <GridToolbarExport csvOptions={{ allColumns: true }} value="deneme" />
    </GridToolbarContainer>
  );
}

export const Index =(props: any) => {
  console.log("proops:",props);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
     .get("https://fakestoreapi.com/products")
     .then((res) => {setProducts(res.data)})

     
     
  }, []);
    
  return (
        <div  className='list'>
             <DataGrid
              rows={products}
              columns={columns}
              pageSize={props.pageSize ? props.pageSize : "8"}
              checkboxSelection
              disableSelectionOnClick
              components={{
                Toolbar: MyExportButton,
              }}
            />
        </div>
    
  )
}

export default Index;
