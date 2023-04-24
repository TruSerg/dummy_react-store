import { FC } from "react";

import {
  Typography,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { ISignupFormData } from "../../../../services/formData";
import { IProduct } from "../../../../services/products";

import Title from "../../../../components/Title";
import Container from "../../../../components/Container";
import ProductPrice from "../../../../components/ProductPrice";

import style from "./styles.module.scss";

interface UserPageProps {
  userInfo: ISignupFormData;
  ordersList: {
    id: string;
    userOrderTotalPrice: number;
    cartList: IProduct[];
  }[];
}

const UserPageLayout: FC<UserPageProps> = ({ userInfo, ordersList }) => {
  return (
    <div className={style.user}>
      <Title
        title={userInfo.username}
        customStyle={{
          backgroundColor: userInfo.gender === "male" ? "#1a8ec1" : "#a84d98",
        }}
      />
      <Container>
        <ul className={style.userList}>
          <li
            className={style.userName}
            style={{
              color: userInfo.gender === "male" ? "#1a8ec1" : "#a84d98",
            }}
          >
            {`${userInfo.firstName} ${userInfo.lastName}`}{" "}
          </li>
          <li className={style.userDescription}>
            <span
              className={style.userPoint}
              style={{
                color: userInfo.gender === "male" ? "#1a8ec1" : "#a84d98",
              }}
            >
              Email:
            </span>{" "}
            {userInfo.email}
          </li>
          <li className={style.userDescription}>
            <span
              className={style.userPoint}
              style={{
                color: userInfo.gender === "male" ? "#1a8ec1" : "#a84d98",
              }}
            >
              Phone:
            </span>{" "}
            {userInfo.phone}
          </li>
          <li className={style.userDescription}>
            <span
              className={style.userPoint}
              style={{
                color: userInfo.gender === "male" ? "#1a8ec1" : "#a84d98",
              }}
            >
              Gender:
            </span>{" "}
            {userInfo.gender}
          </li>
        </ul>
        {ordersList.length > 0 && (
          <div className={style.userOrders}>
            <h2 className={style.userOrdersTitle}>Your orders</h2>
            {ordersList?.map(({ id, userOrderTotalPrice, cartList }) => (
              <div key={id} className={style.userOrdersAccordion}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={style.userOrdersHeader}>
                      <span className={style.userOrdersTableHeader}>
                        Total price:
                      </span>
                      {<ProductPrice price={userOrderTotalPrice} />}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer component={Paper}>
                      <Table size="small" aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                            <TableCell className={style.userOrdersTableHeader}>
                              Image
                            </TableCell>
                            <TableCell className={style.userOrdersTableHeader}>
                              Product
                            </TableCell>
                            <TableCell className={style.userOrdersTableHeader}>
                              Quantity
                            </TableCell>
                            <TableCell className={style.userOrdersTableHeader}>
                              Price
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {cartList?.map(
                            ({ id, title, price, thumbnail, quantity }) => (
                              <TableRow key={id}>
                                <TableCell>
                                  <img
                                    className={style.userOrdersTableImage}
                                    src={thumbnail}
                                    alt="product"
                                  />
                                </TableCell>
                                <TableCell
                                  className={style.userOrdersTableTitle}
                                >
                                  {title}
                                </TableCell>
                                <TableCell
                                  className={style.userOrdersTableQuantity}
                                >
                                  {quantity}
                                </TableCell>
                                <TableCell>
                                  <ProductPrice price={price} />
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default UserPageLayout;
