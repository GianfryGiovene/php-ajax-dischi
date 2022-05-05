const app = new Vue(
    {
        el: '#app',
        data:{
            albums: [],
        },
        created(){
            axios.get('./dataApi.php').then(response=>{
                this.albums = response.data;
            }).catch(error=>console.log('error',error))
        }
    }
)
