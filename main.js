function preload() {
  clown_nose = loadImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinclipart.com%2Fpindetail%2FiTowTbi_transparent-french-moustache-png-black-moustache-clipart%2F&psig=AOvVaw0teXfz_ED9JOPSDoaSbbsb&ust=1628644294751000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCsx_mipfICFQAAAAAdAAAAABAJ');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

    function modelLoaded() {
        console.log('poseNet Is Initialized');
    }

    function gotPoses(results)
    {
       if(results.lenght > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x-15;
            noseY = results[0].pose.nose.y-15;

        }
    }