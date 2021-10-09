import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

export default function TableComponent() {
    const [regionsInfos, setRegionsInfos] = useState([])

    const allInfos=useSelector(state=>state.regionsSlice.allInfos)
    useEffect(() => {
     setRegionsInfos(allInfos)
    }, [allInfos])
 
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tuman nomi</th>
            <th>Jami arizalar</th>
            <th>Ma'qullangan arizalar</th>
            <th>Rad etilgan arizalar</th>
            <th>Muddati tugagan arizalar</th>
       
          </tr>
        </thead>

     

        {regionsInfos!==[] ? regionsInfos.map(item=>(

        <tbody>
          <tr>
            <td>{item.tumanNomi}</td>
            <td>{item.JamiArizalar}</td>
            <td>{item.maqullangan}</td>
            <td>{item.radEtilgan}</td>
            <td>{item.muddatiTugagan}</td>
          </tr>
        </tbody>
        ))
      :
      <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

      </tr>
    </tbody>
     }

      </Table>
    )
}
