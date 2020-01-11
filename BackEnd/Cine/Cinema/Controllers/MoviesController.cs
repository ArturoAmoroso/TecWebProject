﻿using Cinema.Exceptions;
using Cinema.Models;
using Cinema.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cinema.Controllers
{
    [Route("api/actors/{idActor:int}/[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly IMoviesServices moviesServices;
        public MoviesController(IMoviesServices moviesServices)
        {
            this.moviesServices = moviesServices;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetMoviesAsync(int idActor)
        {
            try
            {
                return Ok(await moviesServices.GetMoviesAsync(idActor));
            }
            catch (NotFoundEx ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("{idMovie}")]
        public async Task<ActionResult<Movie>> GetMovieAsync(int idActor, int idMovie)
        {
            try
            {
                var movie = await moviesServices.GetMovieAsync(idActor, idMovie);
                return Ok(movie);
            }
            catch (NotFoundEx ex)
            {
                return NotFound(ex.Message);
            }
            catch(BadRequestEx ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        [HttpPost()]
        public async Task<ActionResult<Movie>> PostMovieAsync(int idActor, [FromBody] Movie movie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var createdMovie = await moviesServices.CreateMovieAsync(idActor, movie);
                return Created($"/api/authors/{idActor}/books/{movie.Id}", createdMovie);
                //return Created($"api/actors/{idActor}/movies/{movie.Id}",moviesServices.CreateMovie(idActor, movie));
            }
            catch (NotFoundEx ex)
            {
                return NotFound(ex.Message);
            }
            catch (BadRequestEx ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
        [HttpDelete("{idMovie}")]
        public async Task<ActionResult<string>> DeleteActorAsync(int idActor, int idMovie)
        {
            try
            {
                var res = await moviesServices.DeleteMovieAsync(idActor, idMovie);
                if (res)
                {
                    return Ok(res);
                }
                else
                    return StatusCode(StatusCodes.Status500InternalServerError, $"Movie: {idMovie} couldn't remove");
            }
            catch (NotFoundEx ex)
            {
                return NotFound(ex.Message);
            }
            catch (BadRequestEx ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{idMovie:int}")]
        public async Task<ActionResult<Movie>> UpdateMovieAsync(int idActor, int idMovie, [FromBody] Movie movie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                return Ok(await moviesServices.UpdateMovieAsync(idActor, idMovie, movie));
            }
            catch (NotFoundEx ex)
            {
                return NotFound(ex.Message);
            }
            catch (BadRequestEx ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
