// Module imports -------------------------------

import { Navigate } from "react-router-dom";

// ----------------------------------------------

export default function RootPage() {
    return (
        <Navigate to="/home" replace />
    );
}