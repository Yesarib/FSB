import React from "react";
import { Box, Button } from "@mui/material";

const Contact = () => {
  const address = "St Stephen's Green, Dublin, Ireland";
  const zoom = 16;

  const lat = 53.338741;
  const lon = -6.261563;
  return (
    <>
      <div
        className="justify-content-center"
        style={{ marginTop: "50px", display: "flex" }}
      >
        <Box>
          <div>
            <h5>Elazığ</h5>
            <p>Adres 1,adres 2,adres 3</p>
          </div>
          <div>
            <h5>Tel</h5>
            <p>+90 111 222 3344</p>
          </div>
          <div>
            <h5>Email</h5>
            <p>lorem@gmail.com</p>
          </div>
        </Box>
        <iframe
          width="600"
          height="450"
          style={{ border: "none", borderRadius: "25px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
          title="google map"
        ></iframe>
      </div>
      <hr style={{marginTop:'75px'}} />
      <div style={{ margin: "7rem" }} className="d-grid justify-content-start">
        <h5>Bizimle iletişime geçmek için </h5>
        <section class="contact-wrap">
          <form action="" class="contact-form">
            <div class="col-sm-6">
              <div style={{width:'150px'}} class="input-block">
                <label for="">İsim</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="input-block">
                <label for="">Email</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="input-block">
                <label for="">Konu</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="input-block textarea">
                <label for="">Mesajınızı buraya yazınız.</label>
                <textarea rows="3" type="text" class="form-control"></textarea>
              </div>
            </div>
            <div class="col-sm-12">
              <Button style={{borderRadius:'2px', color:'white', width:'150px', borderRadius:'10px', marginTop:'15px', marginLeft:'50px'}} className="btn btn-light btn-outline-dark bg-primary"> Gönder </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
