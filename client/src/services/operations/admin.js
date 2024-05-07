  import { toast } from "react-hot-toast"

  import { setUser ,setToken} from "../../redux/authSlice"

  import { apiConnector } from "../apiConnector"
  import { endpoints } from "../apis"

  const {
      LOGIN_API,
      DOWNLOAD_API,
    } = endpoints

  export function login(email, password, navigate) {
      return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        try {
          const response = await apiConnector("POST", LOGIN_API, {
            email,
            password,
          })
    
          // console.log("LOGIN API RESPONSE............", response)
    
          if (!response.data.success) {
            throw new Error(response.data.message)
          }
    
          toast.success("Login Successful")
          dispatch(setToken(response.data.token))
          dispatch(setUser(response.data.user ))
          localStorage.setItem("token", JSON.stringify(response.data.token))
          navigate("/admin/dashboard")
        } catch (error) {
          console.log("LOGIN API ERROR............", error)
          toast.error("Login Failed")
        }
        toast.dismiss(toastId)
      }
    }
    
    
    export const downloadExcel = async () => {
      try {
        const response = await apiConnector("GET", DOWNLOAD_API);
        
        console.log('Response:', response);
        
        if (response.status !== 200) {
          throw new Error('Failed to download Excel file');
        }
        
        // Read response body as blob
        const blob = await response.blob();
        
        // Create URL for the blob
        const url = window.URL.createObjectURL(blob);
        
        // Create a temporary link element to trigger download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'users.xlsx';
        document.body.appendChild(a);
        a.click();
        
        // Cleanup
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        console.log('Excel file downloaded successfully');
      } catch (err) {
        console.error('Error:', err);
        // Handle error
        toast.error('Failed to download Excel file');
      }
    };
    