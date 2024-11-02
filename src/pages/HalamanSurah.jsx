import { Container, Row } from "react-bootstrap"
import CardSurah from "../components/CardSurah"
import Api from "../api"
import { useEffect, useState } from "react"

const HalamanSurah = () => {

  const [surah, setSurah] = useState([]);

  const getSurahAll = async () => {
    await Api.get("/data")
      .then((res) => {
        setSurah(res.data);
        // console.log(res.data);
      });
  }

  useEffect(() => {
    getSurahAll();
  }, []);

  return (
    <>
      <Container>
        <h1>List Surah</h1>
        <Row className="mt-3">
          {
            surah.length > 0 ?
              surah.map((item, index) => (
                <CardSurah
                  index={index + 1}
                  nama={item.nama}
                  asma={item.asma}
                  type={item.type}
                  ayat={item.ayat}
                />
              ))
              :
              <h3>Tidak ada data</h3>
          }
        </Row>
      </Container>
    </>
  )
}

export default HalamanSurah