using AutoMapper;
using Cinema.Data;
using Cinema.Data.Entities;
using Cinema.Exceptions;
using Cinema.Services;
using Moq;
using System;
using System.Threading.Tasks;
using Xunit;

namespace CinemaTest
{
    public class MovieTest
    {
        [Fact]
        public async void MovieService_shouldReturnExceptionIfNotFound()
        {
            //arrange
            int actorId = 1;
            int idMovie = 2;
            var MoqCineRepository = new Mock<ICineRepository>();
            var actorEntity = new ActorEntity()
            {
                Id = 1,
                Name = "Will",
                Lastname = "Smith",
                Age = 55
            };
            var movieEntity = new MovieEntity()
            {
                Id = 2,
                Name = "Titanic",
                Genre = "Romantic",
                Duration = 2
            };
            MoqCineRepository.Setup(m => m.GetMovieAsync(1, false)).Returns(Task.FromResult(movieEntity));
            var myProfile = new CineProfile();
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            var mapper = new Mapper(configuration);
            var movieService = new MoviesServices(MoqCineRepository.Object, mapper);

            //act
            await Assert.ThrowsAsync<NotFoundEx>(() => movieService.GetMovieAsync(actorId,idMovie));
        }
        
    }
}
