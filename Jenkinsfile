pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            echo 'Building...'
          }
        }

        stage('') {
          steps {
            echo 'Another building..'
          }
        }

      }
    }

  }
}