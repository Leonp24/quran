import { Container, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Api from "../api";
import { useEffect, useState } from "react";

const DetailSurah = () => {

  const [ayat, setAyat] = useState([]);

  const { id } = useParams();
  const { nama } = useParams();

  const getSurahById = async () => {
    await Api.get(`/surat/${id}`)
      .then((res) => {
        setAyat(res.data);
        console.log(res.data);
      });
  }

  useEffect(() => {
    getSurahById();
  }, [])

  return (
    <>
      <Container>
        <h1>Surah {nama} </h1>
        <Card className="mt-3">
          <Card.Body>
            {
              ayat.length > 0 ?
                ayat.map((item, index) => (
                  <>
                    <h1 className="text-end mt-5"><b>{item.ar}</b></h1>
                    <p className="text-end mb-5"><mark>{item.nomor}</mark>{item.id}</p>
                  </>
                ))
                : <h5>Maaf, ayat tidak ada</h5>
            }
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default DetailSurah