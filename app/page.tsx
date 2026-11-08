"use client";
import React from "react";
import HeroSection from "../components/herosection";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <div className={styles.content}>
          <Container>
            <Row className="align-items-center py-5">
              <Col md={6} className="mb-4 mb-md-0">
                <Image src="/images/image.jpg" alt="Deskripsi gambar" width={2000} height={2000} className="img-fluid rounded"
                />
              </Col>

              <Col md={6}>
                <h2 className={styles.h2}>About Us</h2>
                <p className={styles.p}>
                  We believe that every great moment deserves a delicious treat. At our bakery, we combine quality ingredients, passion, and craftsmanship to create freshly baked goods that bring joy to every bite. From classic pastries to unique creations, there&apos;s always something special waiting for you.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.discover}>
          <p className={styles.descBot}>Discover a wide selection of freshly baked delights, crafted to satisfy every craving and make every moment a little sweeter. Find your new favorite today!</p>
          <a href="#product"><button className={styles.button}>Discover Products</button></a>
        </div>
      </main>
    </div>
  )
}