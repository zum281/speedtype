import React, { FunctionComponent as FC } from "react";
import { Table, Tbody, Tr, Td, Tfoot, VStack } from "@chakra-ui/react";
import { useResults } from "../../hooks/useResults";

const Results: FC = () => {
	const { grossWpm, netWpm, accuracy } = useResults();
	return (
		<VStack align='start' spacing={4}>
			<Table variant={"simple"}>
				<Tbody>
					<Tr>
						<Td>Gross WPM</Td>
						<Td isNumeric>{grossWpm}</Td>
					</Tr>
					<Tr>
						<Td>Net WPM</Td>
						<Td isNumeric>{netWpm}</Td>
					</Tr>
				</Tbody>
				<Tfoot>
					<Tr>
						<Td>Accuracy</Td>
						<Td isNumeric>{accuracy}%</Td>
					</Tr>
				</Tfoot>
			</Table>
		</VStack>
	);
};

export default Results;
