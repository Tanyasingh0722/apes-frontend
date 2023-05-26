import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { getParticipentsAPI, getVotersAPI } from "./Service";
import { useLocation, useParams } from "react-router-dom";

export default function Members() {
  const { type, id } = useParams();
  const [member, setMember] = React.useState([]);
  const getallmembers = async () => {
    const data = await getParticipentsAPI({
      eventID: id,
    });
    setMember(data);
  };
  const getallvoters = async () => {
    const data = await getVotersAPI({
      agendaID: id,
    });
    setMember(data?.eventDetail?.voters);
  };

  React.useEffect(() => {
    if (type === "event") {
      getallmembers();
    } else {
      getallvoters();
    }
  }, [type]);

  return (
    <TableContainer p={10}>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>
          Participated in {member?.eventDetail?.Hackathonname}{" "}
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Roll Number</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {type == "event"
            ? member?.users?.map((item) => (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td>{item.rollno} </Td>
                  <Td>{item.email}</Td>
                </Tr>
              ))
            : member?.map((item) => (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td>{item.rollno} </Td>
                  <Td>{item.email}</Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
