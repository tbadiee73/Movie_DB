
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationOutlined ({setPage, pageNumber,currentpage}) {
  return (
 
          <Stack  style={{padding: "30px"}}>
      <Pagination
        onChange={(event,pageNum) =>{
          setPage(pageNum);
        }}
        color="primary"
        size='large'
        count="20"
        shape="circular" 
        variant="outlined"
         page={currentpage}
        />
    </Stack>
   
   
  );
}