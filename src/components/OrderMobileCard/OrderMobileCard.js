import React from "react";
import SiIcon from "../../assets/img/si.png";
import noIcon from "../../assets/img/no.png";
import showPdf from "../../assets/img/showPdf.png";
import greyIcon from "../../assets/img/greyIcon.png";
import classes from "../Sidebar/mtdi-table.module.css";
import SendMail from "components/modalComponents/sendMail";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function OrderMobileCard(props) {
  console.log(props.data);
  const { data } = props;
  const [horizontalTabs, setHorizontalTabs] = React.useState("home");
  const [verticalTabs, setVerticalTabs] = React.useState("info");
  const [pageTabs, setPageTabs] = React.useState("homePages");
  const [showModal, setshowModal] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [cardData, setcardData] = React.useState(data);
  const [openedCollapses, setOpenedCollapses] = React.useState([
    "collapseOne",
    "collapse1",
  ]);
  // //  React. useEffect(() => {
  // //   //  console.log(props.data);
  // //     setQuery(props.data);
  // //    console.log(cardData);
  // //   }, [props,cardData]);
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  const collapsesToggle = (collapse) => {
    if (openedCollapses.includes(collapse)) {
      setOpenedCollapses(openedCollapses.filter((item) => item !== collapse));
    } else {
      openedCollapses.push(collapse);
      setOpenedCollapses([...openedCollapses, collapse]);
    }
  };
  console.log(cardData);
  const showModalHandler = (props) => {
    setshowModal(true);
  };
  const hideModalHandler = () => {
    setshowModal(false);
  };
  const showPdfHandler = () => {
    window.open(buyer.dte);
  };
  const X = props.data.filter((rt) => {
    return rt.tienda === "Unilever";
  });
  console.log(X);

  const searchFilter = (event) => {
    setQuery(event.target.value);

    console.log(query);
    // if (query === "") return data;

    // const ui = props.data.filter(post => {
    //     if (query === '') {
    //       return post;
    //     }  else if (post.tienda === 'Unilever') {
    //       return post
    //     }
    //   });
    //   console.log(ui);
  };
  // console.log(cardData);

  return (
    <>
      <div>
        <input placeholder="search" onChange={searchFilter} />
      </div>
      <div className="content">
        <Row>
          <Col className="text-center" lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                {/* <CardTitle tag="h4">Tabla Órdenes</CardTitle>
                <h5 className="card-category">Pedidos</h5> */}
              </CardHeader>
              {data
                .filter((post) => {
                  if (query === "") {
                    return post;
                  }
                })
                .map((post, index) => (
                  <CardBody>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            {/* <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup> */}
                          </td>

                          {/* OPS ID */}
                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Ops ID:
                          </td>

                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {post.order_id}
                          </td>
                          <td
                            className="td-actions text-right"
                            style={{ marginTop: "15px" }}
                          >
                            <br />
                          </td>
                        </tr>

                        {/* CLIENTE   */}
                        <tr>
                          <td />
                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Cliente:
                          </td>

                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {post.tienda}
                          </td>
                          <td className="td-actions text-right">
                            <br />
                            <br />
                          </td>
                        </tr>

                        {/* DTE */}
                        <tr>
                          <td />

                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            DTE:
                          </td>
                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {(() => {
                              switch (post.dte) {
                                case "":
                                  return (
                                    <div>
                                      {" "}
                                      No{" "}
                                      <span className={classes.noIcon}>
                                        <img src={noIcon} />
                                      </span>
                                      <span className={classes.greyIcon}>
                                        <img src={greyIcon} />
                                      </span>
                                    </div>
                                  );

                                case "-":
                                  return (
                                    <div>
                                      {" "}
                                      No{" "}
                                      <span className={classes.noIcon}>
                                        <img src={noIcon} />
                                      </span>
                                      <span className={classes.greyIcon}>
                                        <img src={greyIcon} />
                                      </span>
                                    </div>
                                  );

                                default:
                                  return (
                                    <div>
                                      {" "}
                                      Si &nbsp;
                                      {/* <span
                                       style={{ marginLeft: "14px", cursor: "pointer" }}
                                       className={classes.si}
                                     > */}
                                      {/* <img src={SiIcon} onClick={showModalHandler.bind(this, props)}/>
                                     </span> */}
                                      &nbsp;
                                      <span
                                        style={{ cursor: "pointer" }}
                                        className={classes.showPdf}
                                      >
                                        <a
                                          href={post.dte}
                                          target="_blank"
                                          title="Mostrar DTE"
                                        >
                                          <img src={showPdf} />
                                        </a>
                                      </span>
                                    </div>
                                  );
                              }
                            })()}
                          </td>
                          <td className="td-actions text-right">
                            <br />
                            <br />
                          </td>
                        </tr>

                        {/* RESPUESTA WMS */}
                        <tr>
                          <td />
                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Estado WMS:
                          </td>

                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {(() => {
                              switch (post.wmsState) {
                                case "Enviado":
                                  return (
                                    <div className={classes.enviado}>
                                      {" "}
                                      &nbsp;&nbsp;Enviado
                                    </div>
                                  );
                                case "Pendiente":
                                  return (
                                    <div className={classes.pendiente}>
                                      &nbsp;Pendiente
                                    </div>
                                  );
                                case "No Aplica":
                                  return (
                                    <div className={classes.noAplica}>
                                      &nbsp;No Aplica
                                    </div>
                                  );
                                default:
                                  return (
                                    <div className={classes.noAplica}>
                                      &nbsp;No Aplica
                                    </div>
                                  );
                              }
                            })()}
                          </td>

                          <td className="td-actions text-right">
                            <br />
                            <br />
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <strong>Ver más</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* <div className="table-full-width table-responsive"> */}
                          <Table>
                            <tbody>
                              {/* FECHA DE ORDEN */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Fecha orden:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.fecha_creacion}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* TIENDA */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Tienda:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.tienda}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* CANAL DE VENTA */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Canal de venta:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.canal_de_venta}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* TIENDA OFICIAL */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Tienda Oficial:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.official_store}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* ORDEN DE COMPRA */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Orden de Compra:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.order_id}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* PAÍS */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  País:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.pais}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* ESTADO DE PEDIDO */}
                              {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Estado de Pedido: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}

                              {/* RESPUESTA OMS */}
                              {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Respuesta OMS: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}

                              {/* HUB DE PAGO */}

                              {/* <tr>
                        <td>
                         
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Hub de pago:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Approved
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                    
                      </tr> */}

                              {/* TOTAL */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Total:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  $ {post.precio_sin_shipping}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* SHIPPING */}
                              {/* <tr>
                        <td>
                        
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Shipping:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          $ 5000
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                     
                      </tr> */}

                              {/* ESTADO FULFILLMENT */}
                              <tr>
                                <td></td>
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Estado Fulfillment:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.estado_oc}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* PICKEADOR */}
                              {/* <tr>
                        <td>                   
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Pickeador:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Rodrigo Letelier
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

                              {/* JEFE OPS */}
                              {/* <tr>
                        <td>                   
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Jefe OPS:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Jorman Julio
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>                  
                        </td>                  
                      </tr> */}

                              {/* HUB FULFILLMENT */}
                              {/* <tr>
                        <td/>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                         Hub Fulfillment:
                        </td>                   
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Rodrigo Letelier
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>                
                        </td>                  
                      </tr> */}

                              {/* COURIER */}
                              {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Courier: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}

                              {/* SHIPPING ID */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Shipping ID:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.shipping_id}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* BULTOS / ETIQUETAS */}

                              {/* <tr>
                        <td/>                                       
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Bultos / Etiquetas:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Juan Pérez
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

                              {/* ESTADO DE COURIER */}
                              {/* <tr>
                        <td/>                                        
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Estado Courier:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Juan Pérez
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

                              {/* COMPRADOR */}
                              <tr>
                                <td></td>
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Comprador
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.comprador}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* NPS */}
                              {/* <tr>
                        <td/>                                        
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          NPS:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Consuelo Miranda
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

                              {/* REVIEWS */}
                              {/* <tr>
                        <td/>                                       
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Reviews:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          41093360616
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}
                            </tbody>
                          </Table>
                          {/* </div> */}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </CardBody>
                ))}

              {/* <div className="table-full-width table-responsive"> */}

              {data
                .filter((post) => {
                  console.log(post);
                  if (
                    query !== "" &&
                    post.tienda !== undefined &&
                    post.pais !== undefined &&
                    post.canal_de_venta !== undefined &&
                    post.order_id !== undefined &&
                    post.official_store != null &&
                    post.dte !== undefined &&
                    post.estado_wms !== undefined &&
                    post.estado_oc !== undefined &&
                    post.shipping_id !== undefined &&
                    post.comprador !== undefined
                  ) {
                    return (
                      post.tienda.toLowerCase().includes(query.toLowerCase()) ||
                      post.pais.toLowerCase().includes(query.toLowerCase()) ||
                      post.canal_de_venta
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                      post.order_id.toString().includes(query) ||
                      post.official_store
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                      post.dte.toLowerCase().includes(query.toLowerCase()) ||
                      post.estado_wms
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                      post.estado_oc
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                      post.shipping_id.toString().includes(query) ||post.comprador
                      .toLowerCase()
                      .includes(query.toLowerCase())
                    );
                    // return (
                    //   post.tienda === query ||
                    //   post.pais === query ||
                    //   post.order_id === query ||
                    //   post.fecha_creacion === query ||
                    //   post.canal_de_venta === query
                    // );
                    //return x;
                    //  return post.indexOf('Unile') !== -1
                    // return post.tienda.includes('Unile');
                  }
                })
                .map((post, index) => (
                  // <div className="box" key={index}>
                  //   <p>{post.pais}</p>
                  //   <p>{post.tienda}</p>
                  //   <p>{post.order_id}</p>
                  //   <p>{post.canal_de_venta}</p>
                  //   <p>{post.official_store}</p>
                  // </div>
                  <CardBody>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            {/* <FormGroup check>
                                               <Label check>
                                                 <Input defaultChecked type="checkbox" />
                                                 <span className="form-check-sign" />
                                               </Label>
                                             </FormGroup> */}
                          </td>

                          {/* OPS ID */}
                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Ops ID:
                          </td>

                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {post.order_id}
                          </td>
                          <td
                            className="td-actions text-right"
                            style={{ marginTop: "15px" }}
                          >
                            <br />
                          </td>
                        </tr>

                        {/* CLIENTE   */}
                        <tr>
                          <td />
                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Cliente:
                          </td>

                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {post.tienda}
                          </td>
                          <td className="td-actions text-right">
                            <br />
                            <br />
                          </td>
                        </tr>

                        {/* DTE */}
                        <tr>
                          <td />

                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            DTE:
                          </td>
                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {(() => {
                              switch (post.dte) {
                                case "":
                                  return (
                                    <div>
                                      {" "}
                                      No{" "}
                                      <span className={classes.noIcon}>
                                        <img src={noIcon} />
                                      </span>
                                      <span className={classes.greyIcon}>
                                        <img src={greyIcon} />
                                      </span>
                                    </div>
                                  );

                                case "-":
                                  return (
                                    <div>
                                      {" "}
                                      No{" "}
                                      <span className={classes.noIcon}>
                                        <img src={noIcon} />
                                      </span>
                                      <span className={classes.greyIcon}>
                                        <img src={greyIcon} />
                                      </span>
                                    </div>
                                  );

                                default:
                                  return (
                                    <div>
                                      {" "}
                                      Si &nbsp;
                                      {/* <span
                                                          style={{ marginLeft: "14px", cursor: "pointer" }}
                                                          className={classes.si}
                                                        > */}
                                      {/* <img src={SiIcon} onClick={showModalHandler.bind(this, props)}/>
                                                        </span> */}
                                      &nbsp;
                                      <span
                                        style={{ cursor: "pointer" }}
                                        className={classes.showPdf}
                                      >
                                        <a
                                          href={post.dte}
                                          target="_blank"
                                          title="Mostrar DTE"
                                        >
                                          <img src={showPdf} />
                                        </a>
                                      </span>
                                    </div>
                                  );
                              }
                            })()}
                          </td>
                          <td className="td-actions text-right">
                            <br />
                            <br />
                          </td>
                        </tr>

                        {/* RESPUESTA WMS */}
                        <tr>
                          <td />
                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Estado WMS:
                          </td>

                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {(() => {
                              switch (post.wmsState) {
                                case "Enviado":
                                  return (
                                    <div className={classes.enviado}>
                                      {" "}
                                      &nbsp;&nbsp;Enviado
                                    </div>
                                  );
                                case "Pendiente":
                                  return (
                                    <div className={classes.pendiente}>
                                      &nbsp;Pendiente
                                    </div>
                                  );
                                case "No Aplica":
                                  return (
                                    <div className={classes.noAplica}>
                                      &nbsp;No Aplica
                                    </div>
                                  );
                                default:
                                  return (
                                    <div className={classes.noAplica}>
                                      &nbsp;No Aplica
                                    </div>
                                  );
                              }
                            })()}
                          </td>

                          <td className="td-actions text-right">
                            <br />
                            <br />
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <strong>Ver más</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* <div className="table-full-width table-responsive"> */}
                          <Table>
                            <tbody>
                              {/* FECHA DE ORDEN */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Fecha orden:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.fecha_creacion}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* TIENDA */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Tienda:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.tienda}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* CANAL DE VENTA */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Canal de venta:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.canal_de_venta}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* TIENDA OFICIAL */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Tienda Oficial:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.official_store}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* ORDEN DE COMPRA */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Orden de Compra:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.order_id}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* PAÍS */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  País:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.pais}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* ESTADO DE PEDIDO */}
                              {/* <tr>
                                           <td/>      
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Estado de Pedido: 
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             
                                           </td>
                                           <td className="td-actions text-right">
                                               <br/>
                                               <br/>
                                           </td>
                                          
                                         </tr> */}

                              {/* RESPUESTA OMS */}
                              {/* <tr>
                                           <td/>      
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Respuesta OMS: 
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             
                                           </td>
                                           <td className="td-actions text-right">
                                               <br/>
                                               <br/>
                                           </td>
                                          
                                         </tr> */}

                              {/* HUB DE PAGO */}

                              {/* <tr>
                                           <td>
                                            
                                           </td>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Hub de pago:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Approved
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                    
                                         </tr> */}

                              {/* TOTAL */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Total:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  $ {post.precio_sin_shipping}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* SHIPPING */}
                              {/* <tr>
                                           <td>
                                           
                                           </td>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Shipping:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             $ 5000
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                     
                                         </tr> */}

                              {/* ESTADO FULFILLMENT */}
                              <tr>
                                <td></td>
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Estado Fulfillment:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.estado_oc}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* PICKEADOR */}
                              {/* <tr>
                                           <td>                   
                                           </td>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Pickeador:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Rodrigo Letelier
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}

                              {/* JEFE OPS */}
                              {/* <tr>
                                           <td>                   
                                           </td>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Jefe OPS:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Jorman Julio
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>                  
                                           </td>                  
                                         </tr> */}

                              {/* HUB FULFILLMENT */}
                              {/* <tr>
                                           <td/>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                            Hub Fulfillment:
                                           </td>                   
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Rodrigo Letelier
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>                
                                           </td>                  
                                         </tr> */}

                              {/* COURIER */}
                              {/* <tr>
                                           <td/>      
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Courier: 
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             
                                           </td>
                                           <td className="td-actions text-right">
                                               <br/>
                                               <br/>
                                           </td>
                                          
                                         </tr> */}

                              {/* SHIPPING ID */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Shipping ID:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.shipping_id}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* BULTOS / ETIQUETAS */}

                              {/* <tr>
                                           <td/>                                       
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Bultos / Etiquetas:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Juan Pérez
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}

                              {/* ESTADO DE COURIER */}
                              {/* <tr>
                                           <td/>                                        
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Estado Courier:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Juan Pérez
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}

                              {/* COMPRADOR */}
                              <tr>
                                <td></td>
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Comprador
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.comprador}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* NPS */}
                              {/* <tr>
                                           <td/>                                        
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             NPS:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Consuelo Miranda
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}

                              {/* REVIEWS */}
                              {/* <tr>
                                           <td/>                                       
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Reviews:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             41093360616
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}
                            </tbody>
                          </Table>
                          {/* </div> */}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </CardBody>
                ))}

              {/* </div> */}
              {/* </CardBody> */}
              {/* <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh spin" />
                  Updated 3 minutes ago
                </div>
              </CardFooter> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OrderMobileCard;
