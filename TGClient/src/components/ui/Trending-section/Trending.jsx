import React from "react";
import { Container, Row, Col } from "reactstrap";

// import { NFT__DATA } from "../../../assets/data/data";
import "./trending.css";
import NftCard from "../Nft-card/NftCard";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {

  const { data , loading, error } = useFetch('upload/getFilesIpfs')

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="trending__title">Newly Updated</h3>
          </Col>

          {data?.slice(0, 8).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
