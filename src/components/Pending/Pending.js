import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CachedIcon from '@mui/icons-material/Cached';
import SendIcon from '@mui/icons-material/Send';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

const Pending = () => {
  // Sample data
  const data = [
    { chaneel: <LocalMallIcon/>, orderno: "#TKN20203754",orderdate:"2022-05-04",city:"Lucknow",customername:"Abhisek Dixit",ordervalue:0.00 },
    { chaneel: <LocalMallIcon/>, orderno: "#TKN20203753",orderdate:"2022-05-04",city:"Lucknow",customername:"Abhisek Dixit",ordervalue:0.00 },
    { chaneel: <LocalMallIcon/>, orderno: "#TKN20203752",orderdate:"2022-05-04",city:"Lucknow",customername:"Abhisek Dixit",ordervalue:0.00 },
    
  ];
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentPageData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{backgroundColor:"white",padding:"40px",fontSize:"13px"}}>
        <div style={{display:'flex',justifyContent:"space-between",marginBottom:"20px"}}>
            <div style={{display:"flex"}}>
                <div style={{display:"flex",alignItems:'center',justifyContent:"center",width:"150px",borderStyle:"groove",marginRight:"10px"}}>
                    <div>
                        <FileDownloadIcon style={{paddingRight:"10px"}}/>
                    </div>
                    <div>Import Orders</div>
                </div>
                <div style={{display:"flex",alignItems:'center',justifyContent:"center",width:"150px",borderStyle:"groove",marginRight:"10px"}}>
                    <div>
                        <SendIcon style={{paddingRight:"10px"}} />
                    </div>
                    <div>Accept</div>
                </div>
                <div style={{display:"flex",alignItems:'center',justifyContent:"center",width:"150px",borderStyle:"groove",marginRight:"10px"}}>
                    <div>
                        <LocalPrintshopIcon style={{paddingRight:"10px"}}/>
                    </div>
                    <div>Print</div>
                </div>
            </div>
            <div>
            <div style={{display:"flex",width:"130px",justifyContent:"space-evenly",borderRadius:"7px",alignItems:"center",borderStyle:"solid",backgroundColor:"blue",color:"white",border:"none"}}>
                    <div>
                        <CachedIcon style={{paddingTop:"5px"}} />
                    </div>
                    <div>Refresh</div>
                </div>
            </div>
        </div>
    <div >
      <table style={{ width: "100%", textAlign: "start", borderCollapse: "collapse",overflowY: 'auto', maxHeight: '100px'  }}>
        <thead style={{ border: "1px solid black" }}>
          <tr>
            <th style={{ textAlign: "end", padding: '8px', borderRightStyle:"solid"}}>
              <input type='checkbox' />
            </th>
            <th style={{ textAlign: "start", padding: '8px' ,borderRightStyle:"solid"}}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Channel</span>
                <SearchIcon style={{ padding: '5px' }} />
                <FilterAltIcon style={{ marginLeft: '5px' }} />
              </div>
            </th>
            <th style={{ textAlign: "start", padding: '8px',borderRightStyle:"solid" }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>Order No</div>
                <div>
                  <SearchIcon style={{ padding: '5px' }} />
                  <FilterAltIcon style={{ padding: '5px' }} />
                </div>
              </div>
            </th>
            <th style={{ textAlign: "start", padding: '8px',borderRightStyle:"solid" }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>Order Date</div>
                <div>
                  <SearchIcon style={{ padding: '5px' }} />
                  <FilterAltIcon style={{ padding: '5px' }} />
                </div>
              </div>
            </th>
            <th style={{ textAlign: "start", padding: '8px' ,borderRightStyle:"solid"}}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>City</div>
                <div>
                  <FilterAltIcon style={{ padding: '5px' }} />
                </div>
              </div>
            </th>
            
            <th style={{ textAlign: "start", padding: '8px',borderRightStyle:"solid" }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>Customer Name</div>
                <div>
                  <SearchIcon style={{ padding: '5px' }} />
                </div>
              </div>
            </th>
            <th style={{ textAlign: "start", padding: '8px',borderRightStyle:"solid" }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>Order Value</div>
                <div>
                  <FilterAltIcon style={{ padding: '5px' }} />
                </div>
              </div>
            </th>
            <th style={{ textAlign: "start", padding: '8px',borderRightStyle:"solid" }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>Status</div>
                <div>
                  <FilterAltIcon style={{ padding: '5px' }} />
                </div>
              </div>
            </th>
            <th style={{ textAlign: "start", padding: '8px',borderRightStyle:"solid" }}>
              <span>Operation</span>
            </th>
          </tr>
        </thead>
        <tbody style={{overflow: "scroll", maxHeight: '200px'}}>
          {data.map((item, index) => (
            <tr key={index} style={{ textAlign: "start", border: "1px solid black" }}>
              <td style={{ display: "flex", justifyContent: 'space-between', padding: '8px' }}>
                <div>
                  <AddIcon />
                </div>
                <div>
                  <input type='checkbox' />
                </div>
              </td>
              <td style={{ padding: '8px' }}>{item.chaneel}</td>
              <td style={{ padding: '8px',color:"blue" }}>{item.orderno}</td>
              <td style={{ padding: '8px' }}>{item.orderdate}</td>
              <td style={{ padding: '8px' }}>{item.city}</td>
              <td style={{ padding: '8px' }}>{item.customername}</td>
              <td style={{ padding: '8px' }}>{item.ordervalue}</td>
              <td style={{ padding: '8px' }}><button style={{backgroundColor:"lightgreen",color:'green',borderColor:"green",borderStyle:'solid'}}>Pending</button></td>
              <td style={{ padding: '8px' }}>
                <select id='actions' style={{width:"80px",height:"30px"}}> 
                    <option>Actions</option>
                </select>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: "flex-end", marginTop: '20px' }}>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
</div>
  );
};

export default Pending;
