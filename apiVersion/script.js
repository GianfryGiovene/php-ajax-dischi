const app = new Vue(
    {
        el: '#app',
        data:{
            albums: [],
            allGenres: [],
            genreValue:'',
            genreDuplicate:[],
            genreNoDuplicate:[]
        },
        methods:{
            genreNoDuplicateArrayGenerator(){
                this.albums.forEach(element => {
                    this.genreDuplicate.push(element.genre);   
                });
                this.genreNoDuplicate = [...new Set(this.genreDuplicate)];
            },
            getOption(e){
                this.genreValue = e.target.value;
            }
        },
        
        mounted(){
            axios.get('http://localhost/php-ajax-dischi/apiVersion/dataApi.php').then(response=>{
                this.albums = response.data;
                this.genreNoDuplicateArrayGenerator();
            }).catch(error=>console.log('error',error));
        },
        computed:{
            filteredGenre(){
                return this.albums.filter(item=> item.genre.toLowerCase().includes(this.genreValue.toLowerCase()))
            }
        }
    }
)  
