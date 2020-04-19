function uploadFile(url) {
    console.log("uploadFile called!");

    var storageReference = firebase.storage().ref();
    var file = document.getElementById('customFile').files[0];

    var metaData = {
        contentType: "image/jpeg",
        cacheControl: "public,max-age=300"
    };

    storageReference
        .child("images/nature/" + file.name)
        .put(file, metaData)
        .then(result => {
            console.log("Image uploaded!");
            alert("File uploaded!");
        })
        .catch(error => {
            console.log('Error === ', error);
            switch (error.code) {
                case 'storage/unauthorized':
                    alert('User not authenticated!');
                    break;

                case 'storage/canceled':
                    alert('upload canceled!');
                    break;
                default:
                    alert("Something went wrong!");
                    break;
            }

        });
}

function showFile(url) {
    console.log("showFile called!");

    var storageReference = firebase.storage().ref();
    storageReference.child("images/nature/cat.jpg").getDownloadURL()
        .then(url => {
            var img = document.getElementById("myimg");
            img.src = url;
        })
        .catch(error => {
            console.log('Error === ', error);
            alert("Something went wrong!");
        });
}

function deleteFile(url) {
    console.log("deleteFile called!");


    var storageReference = firebase.storage().ref();
    storageReference.child("images/nature/cat.jpg").delete()
        .then((response) => {
            var img = document.getElementById("myimg");
            img.src = "";
            alert("Image Deleted!")
        })
        .catch(error => {
            console.log('Error === ', error);
            alert("Something went wrong!");
        });
}

function getAllFiles() {
    console.log("getAllFile called!");

    var storageReference = firebase.storage().ref();
    var folderRef = storageReference.child("images/nature");

    folderRef.listAll().then((result) => {

        result.prefixes.forEach((folderRef) => {
            console.log("FOLDER === ", folderRef);
        });

        result.items.forEach((itemRef) => {
            console.log("File === ", itemRef);
        });
    }).catch(error => {
        console.log('Error === ', error);
        alert("Something went wrong!");
    });
}