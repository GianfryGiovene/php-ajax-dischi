
<main class="container-fluid">
    <div id="card-container" class="container justify-content-between d-flex flex-wrap gap-3">
        <?php 
        foreach($database as $album){
        ?>
        <div class="text-white d-flex flex-column align-items-center col-2 ggf-card p-2">
            <div>
                <img class="w-100" src="<?= $album['poster']?>" alt="poster">
            </div>
            <h3 class="text-center"><?= $album['title']?></h3>
            <div class="d-flex flex-column align-items-center">
                <span><?= $album['author']?></span>
                <span><?= $album['year']?></span>
            </div>
        </div>
        <?php    
        }
        ?>
    </div>
</main>