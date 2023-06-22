import { useState } from 'react';
import { Typography, Box, TextField, Button, styled } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
`;

const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();


    return (
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField value={text} label="Enter Expense" onChange={(e) => setText(e.target.value)} />
            <TextField value={amount} label="Enter Amount" onChange={(e) => setAmount(e.target.value)} />
            <Button variant="contained" onClick={NewTransaction}>Add Transaction</Button>
        </Container>
    )

}
export default NewTransaction;