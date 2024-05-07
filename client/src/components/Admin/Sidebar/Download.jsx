import React, { useEffect, useState } from 'react'
import {downloadExcel} from "../../../services/operations/admin"

function Download() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      downloadExcel()
        .then(() => setLoading(false))
        .catch(error => {
          console.error('Error downloading Excel file:', error);
          setLoading(false);
          // Handle error, e.g., display an error message
        });
    }
  }, [loading]);

  const handleDownload = () => {
    setLoading(true);
  };

  return (
    <div>
    <a href="http://localhost:4000/api/v1/user/download">download</a>
    </div>
  );
}

export default Download