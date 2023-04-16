// import { Form } from 'react-bootstrap';
function Pay(){
    return (
        <div
          style={{ background: "black", height: "90.5vh" }}
          className="d-flex align-items-center justify-content-center">
          <div>
            <h4 className="text-white text-center fw-semibold fs-1 mb-4">
              Premium
            </h4>
    
            <div style={{ textAlign: "center" }}>
              <p className="text-white">
                Bayar sekarang dan streaming film-film yang kekinian dari
                <strong style={{ color: "#E50914" }}> DUMBFLIX</strong>
                <br></br>
                <strong style={{ color: "#E50914" }}> DUMBFLIX</strong>: 0812xxxxxxx
              </p>
            </div>
            <input                 className="w-100 mt-3"
                style={{ background: "white", border: "1px solid red" }}></input>
                 <input type="file" className="w-100 mt-3"
                style={{ background: "white", border: "1px solid red" }}></input>
            <>
              <button
                className="w-100 mt-5"
                style={{ background: "red", border: "1px solid red" }}
                // onClick={(e) => handleBuy.mutate(e)}
                >
                Kirim
              </button>{" "}
            </>
          </div>
        </div>
      );
}
export default Pay;