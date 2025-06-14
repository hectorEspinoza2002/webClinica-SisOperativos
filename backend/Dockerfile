# Etapa 1: Build con Maven y Java 21
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y maven && mvn clean package -DskipTests

# Etapa 2: Imagen final con Java 21
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]



