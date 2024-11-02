import { Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const CardSurah = (props) => {
  return (
    <>
      <Col md={6} className="mt-3">
        <Link className="text-decoration-none" to={`/detail-surah/${props.index}/${props.nama}`}>
          <Card className="card-surah">
            <Card.Header className="bg-success text-white"> Surah {props.nama} </Card.Header>
            <Card.Body>
              <p>{props.asma}</p>
              <p>{props.type}</p>
              <p>{props.ayat} Ayat</p>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  )
}

export default CardSurah