import React, {Fragment, useState, useEffect} from "react";
import { Button, Col, Spinner} from "reactstrap";
import { Select, MenuItem } from "@material-ui/core";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import RoomIcon from "@material-ui/icons/Room";


const tableIcons = {
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <RoomIcon {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
  };

const categories = [
    "Sodimac", "Test"
]

const selectOptions = [
    {value: "Sodimac", label: "Sodimac"},
    {value: "Test", label: "Test"}
]


console.log("categories",categories);

const Form = () => {



    const [data, setData] = useState({
        address: "",
        instructions: "",
        dte: "",
        name: "",
        phone: "",
        email: "",
        city_code: "",
        maxHeight: "",
        maxLenght: "",
        maxWidth: "",
        cantidad_paquetes: 0,
        from: "Sodimac",
        products: [],
    });
    const [product, setProduct] = useState({
        sku: "",
        category: "",
        product_name: "",
        product_price: "",
        brand: "",
        qty: "",
    });
    const [error, setError] = useState('');
    useEffect(() => {
        console.log(data.products);
    }, [data.products]);

    const columns = [
        {
            title: "SKU",
            field: "SKU",
            headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                fontSize: "12px",
                borderRadius: "20px 0px 0px 20px",
              },
            render: row => row.sku,
        },
        
        {
            title: "Categoría",
            field: "category",
            headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                fontSize: "12px",
              },
            render: row => row.category,
            
        },
        {
            title: "Nombre Producto",
            field: "Nombre Producto",
            headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                fontSize: "12px",
              },
            render: row => row.product_name,
            
        },
        {
            title: "Precio Producto",
            field: "Precio Producto",
            headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                fontSize: "12px",
              },
            render: row => row.product_price,
            
        },
        {
            title: "Marca",
            field: "Marca",
            headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                fontSize: "12px",
              },
            render: row => row.brand,
            
        },
        {
            
            title: "Cantidad",
            field: "Cantidad",
            headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                borderRadius: "0px 20px 20px 0px",
                fontSize: "12px",
              },
            render: row => row.qty,
            
        },
    ];
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const handleProductInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }
    const validateProduct = () => {
        if (product.sku === '' || product.category === '' || product.product_name === '' ||
        product.product_price ===  '' || product.brand === '' || product.qty === '') {
            return false;
        }
        return true;
    }
    const handleSelectChange = (e, child) => {
        setData({
            ...data,
            [e.target.name]: child.props.value
        });
    }


    const addProduct = (e) => {
        e.preventDefault();
        if(!validateProduct()) {
            setError('Por favor complete todos los campos');
            throw new Error('Por favor complete todos los campos');
        }
        setError('');
        product.qty = parseInt(product.qty);
        product.product_price = parseInt(product.product_price);
        setData({
            ...data,
            products: [...data.products, product]
        });
        setProduct({
            sku: '',
            category: '',
            product_name: '',
            product_price: '',
            brand: '',
            qty: '',
        });

    }
      

    const sendData = (e) => {
        e.preventDefault();
        data.city_code = parseInt(data.city_code);
        data.maxHeight = parseInt(data.maxHeight);
        data.maxLenght = parseInt(data.maxLenght);
        data.maxWidth = parseInt(data.maxWidth);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = data;
        var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };
        fetch("https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/logysto/orders", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
    }
    return(

    
<Fragment>

    <div className="content">

     
        <h5
          className="titleTable"
          style={{
            color: "#C4C4C4",
            width: "450px",
            fontSize: "10px",
            fontWeight: "800",
            marginLeft: "1em",
            marginBottom: "0px",
          }}
        >
          Panel: Vista Administrador
        </h5>
        <p
          classname="textNameTable"
          style={{
            color: "black",
            width: "450px",
            fontSize: "20px",
            fontWeight: "800",
            marginLeft: "1em",
          }}
        >
          Logysto
        </p>

        <Col md="12">

        <label htmlFor="select-country">
          <h5
            style={{
              color: "black",
              width: "100px",
              fontSize: "12px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "0px",
            }}
          >
           Canal de venta
            </h5>
            <Select
            labelId="select-tienda"
            id="select-tienda"     
            name="from"
            style={{ width: "200px", height:"35px", marginLeft: "1em", borderRadius: "17px", marginBottom: "1em", fontSize: "10px" }}
            label="Canal de venta"  
            onChange={handleSelectChange}  
            defaultValue="Sodimac"         
          >
                <option value="Sodimac">Sodimac</option>
                <option value="Test">Test</option>
           
          </Select>
        </label>

        </Col>
        <br/>
        <br/>
        

            {/* <h1>Formulario</h1> */}
            <form
            className="row"
            onSubmit={sendData}>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >Dirección
                    </p>
                    <input
                        placeholder="Ingrese una dirección"
                        className="form-control"
                        type="text"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="address"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p
                    style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >Instrucciones
                    </p>
                    <input
                        placeholder="Ingrese instrucciones"
                        className="form-control"
                        type="text"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="instructions"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >DTE
                    </p>
                    <input
                        placeholder="DTE"
                        className="form-control"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        type="text"
                        name="dte"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >Nombre
                    </p>
                    <input
                        placeholder="Ingrese nombre"
                        className="form-control"
                        type="text"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="name"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p
                    style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Código de ciudad
                    </p>
                    <input
                        placeholder="Código de ciudad"
                        className="form-control"
                        type="number"
                        style={{width:"300px", borderRadius: "17px", boxShadow:"0 6px 10px -4px rgb(0 0 0 / 15%)", height:"35px", marginBottom:"2em"}}
                        name="city_code"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Teléfono
                    </p>
                    <input
                        placeholder="Ingrese teléfono"
                        className="form-control"
                        type="text"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="phone"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Email
                    </p>
                    <input
                        placeholder="Ingrese un correo electrónico"
                        className="form-control"
                        type="text"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="email"
                        required
                        onChange={handleInputChange}
                    />
                </div>
          
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Altura máxima
                    </p>
                    <input
                        placeholder="Altura"
                        className="form-control"
                        type="number"
                        style={{width:"300px", borderRadius: "17px", height:"35px", marginBottom:"2em"}}
                        name="maxHeight"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Largo máximo
                    </p>
                    <input
                        placeholder="Largo"
                        className="form-control"
                        type="number"
                        style={{width:"300px", borderRadius: "17px", height:"35px", marginBottom:"2em"}}
                        name="maxLenght"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Ancho máximo
                    </p>
                    <input
                        placeholder="Ancho"
                        className="form-control"
                        type="number"
                        style={{width:"300px", borderRadius: "17px", height:"35px", marginBottom:"2em"}}
                        name="maxWidth"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-12">
                    <hr />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        SKU
                    </p>
                    <input
                        placeholder="SKU"
                        className="form-control"
                        type="text"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="sku"
                        value={product.sku}
                        onChange={handleProductInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Categoría
                    </p>
                    <input
                        placeholder="Categoría"
                        className="form-control"
                        type="text"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="category"
                        value={product.category}
                        onChange={handleProductInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Nombre del producto
                    </p>
                    <input
                        placeholder="Nombre del producto"
                        className="form-control"
                        type="text"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="product_name"
                        value={product.product_name}
                        onChange={handleProductInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Precio del producto
                    </p>
                    <input
                        placeholder="Precio del producto"
                        className="form-control"
                        type="number"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="product_price"
                        value={product.product_price}
                        onChange={handleProductInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Marca
                    </p>
                    <input
                        placeholder="Marca"
                        className="form-control"
                        type="text"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="brand"
                        value={product.brand}
                        onChange={handleProductInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <p style={{
                        color:"black",
                         fontSize: "12px",
                         fontWeight: "800"
                    }}
                    >
                        Cantidad
                    </p>
                    <input
                        placeholder="Cantidad"
                        className="form-control"
                        type="number"
                        style={{width:"300px", height:"35px", marginBottom:"2em"}}
                        name="qty"
                        value={product.qty}
                        onChange={handleProductInputChange}
                    />
                </div>
                <div className="col-12">
                    <span className="error">
                        {error} 
                    </span>
                    <br/>
                        <Button
                            className="btn btn-primary"
                            style={{backgroundColor: "#1D308E", borderRadius:"20px", width:"200px", height:"50px", color:"white"}}
                            onClick={addProduct}
                            >
                                Agregar producto
                        </Button>
                        
                </div>
                <div className="col-12">
                 
               
                    <MaterialTable
                        title=""
                        options={{ columnsButton: true, sorting: true, search: false }}
                        columns={columns}
                        data={data.products}
                        style={{ marginLeft: "1em", marginTop: "2em", color:"black" }}
                        icons={tableIcons}
                    />
                </div>
                        
           
                    
                
                <div className="col-md-6">
                <Button
                    className="btn btn-primary"
                    style={{backgroundColor: "#1D308E", borderRadius:"20px", width:"150px", height:"50px", color:"white"}}
                    type="submit">
                        Enviar
                </Button>
                </div>
            </form>
        </div>
    </Fragment>
    );
    }
    export default Form;