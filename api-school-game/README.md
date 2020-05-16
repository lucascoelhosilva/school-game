# school-game
project created TCC


## Requirements

1. Install docker 
    
    [docker](https://docs.docker.com/get-docker/)
    
    [docker-compose](https://docs.docker.com/compose/install/)

2. Build project

    ``` docker-compose build ```

3. Running project

    ``` docker-compose up ```
    

##

*METHODS*
    
    - GET
    - POST
    - PUT
    - DELETE

*URL*

    Subjects
        - localhost:8094/api/v1/subjects
        - localhost:8094/api/v1/subjects/{id}
    
    Topics
        - http://localhost:8094/api/v1/subjects/{id}/topics
        - http://localhost:8094/api/v1/subjects/{id}/topics/{id}
    
    Question
        - http://localhost:8094/api/v1/topics/{id}/questions
        - http://localhost:8094/api/v1/topics/{id}/questions/{id}
    
    Answer
        - http://localhost:8094/api/v1/questions/{id}/answers
        http://localhost:8094/api/v1/questions/{id}/answers/{id}
