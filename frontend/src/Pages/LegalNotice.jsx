import React from "react";
import '../Pages/Css/LegalNotice.css';



export default function LegalNotice() {
    
  return (

  
      
   <div className="Legal-container">
    
      <h1>Legal Notice</h1>
      <div className="Legal-hr"></div>

      <h2>H.H Handmade Harmony</h2>
      <p>
        Sole Proprietorship<br />
        Lindenstraße 12<br />
        Unit B3<br />
        30159 Hannover<br />
        Germany
      </p>

      <hr/>

      <h2>Contact</h2>
      <p>
        <strong>Phone:</strong> +49 170 555 0199<br />
        <strong>Email:</strong> contact@hh-handmade.com
      </p>

      <hr/>

      <h2>VAT ID</h2>
      <p>
        Value Added Tax Identification Number according to § 27 a German VAT Act:<br />
        <strong>DE999999999</strong> (replace with your real VAT ID if applicable)
      </p>

      <hr/>
      
      <h2>Dispute Resolution</h2>
      <p>
        We are neither willing nor obligated to participate in dispute resolution
        procedures before a consumer arbitration board.
      </p>

      <div className="Legal-copyright">
        <hr style={{marginTop:"60px"}}/>

        <p>Copyright @ 2025 - All Right Reserved (H.H Handmade Harmony) </p>

        <hr style={{width: "40%"}}/>

        <p>Powered by H.H Handmade Harmony</p>
      </div>

    </div>
   
   
  );

}
