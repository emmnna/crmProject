import { Dialog, DialogContent, DialogTitle, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";

export default function Popup({ openPopup, setOpenPopup, client, setClient }) {
    const [status, setStatus] = useState(client. statut_du_contact);

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleSubmit = () => {
        setClient({ ...client,  statut_du_contact: status });
        setOpenPopup(false);
    };

    return (
        <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
            <DialogTitle>Mettre à jour le client</DialogTitle>
            <DialogContent>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        labelId="status-label"
                        id="status-select"
                        value={status}
                        onChange={handleStatusChange}
                    >
                        <MenuItem value={"Contacté"}>Contacté</MenuItem>
                        <MenuItem value={"En attente"}>En attente</MenuItem>
                        <MenuItem value={"RDV programmé"}>RDV programmé</MenuItem>
                    </Select>
                </FormControl>
                <Button onClick={handleSubmit} color="primary" variant="contained">
                    Mettre à jour
                </Button>
            </DialogContent>
        </Dialog>
    );
}

Popup.propTypes = {
    openPopup: PropTypes.bool.isRequired,
    setOpenPopup: PropTypes.func.isRequired,
    client: PropTypes.object.isRequired,
    setClient: PropTypes.func.isRequired,
};
