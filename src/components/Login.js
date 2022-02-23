import React from "react";
import "./style.css";

export default function Login() {
  return (
    <div className="container">
      <div className="modern-view">
        <img
          class="logo "
          src="https://statics.teams.cdn.office.net/hashedassets-launcher/v2/logo_teams.2806c5625995dc0f79c4747b5de9d43d.svg"
        />
      </div>
      <div className="content">
        <div className="content-1">
          <h1>
            Teams toplantınıza nasıl
            <br /> katılmak istersiniz?
          </h1>
        </div>
        <div id="verticle"></div>
      </div>
      <div className="content-2">
        <button className="btn-primary">
          <img
            className="btn-logo"
            src="https://statics.teams.cdn.office.net/hashedassets-launcher/v2/download_primary.0811e766c560a13d0da9804125019a58.svg"
          />
          <div className="btn-text">
            <h3>Teams'i indirin (iş veya okul)</h3>
            <p>En iyi deneyimi sağlamak için masaüstü uygulamasını kullanın.</p>
          </div>
        </button>
        <button className="btn-primary">
          <img className="btn-logo" src="https://statics.teams.cdn.office.net/hashedassets-launcher/v2/continue_primary.dc680623c05dccd97e9437eed37fa0f6.svg" />
          <div className="btn-text">
            <h3>Bu tarayıcıda devam et</h3>
            <p>İndirme veya yükleme gerekmez.</p>
          </div>
        </button>
        <button className="btn-primary">
          <img className="btn-logo" src="https://statics.teams.cdn.office.net/hashedassets-launcher/v2/logo_teams.2806c5625995dc0f79c4747b5de9d43d.svg" />
          <div className="btn-text">
            <h3>Teams’i açın (iş veya okul)</h3>
            <p aria-live="off" aria-atomic="true" class="textTransition">
              Zaten sahip misiniz? Doğrudan toplantınıza gidin.
            </p>
          </div>
        </button>
      </div>
     <div className="footer"> 
     <p>Gizlilik ve tanımlama bilgileri </p> 
    
     <p> Üçüncü taraf bilgilerini açıklama</p>
     </div>
    </div>
  );
}
