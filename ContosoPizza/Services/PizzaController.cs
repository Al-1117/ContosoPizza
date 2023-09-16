using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContosoPizza.Data;
using ContosoPizza.Models;


namespace ContosoPizza.Services
{
    [ApiController]
    [Route("api/[controller]")]
    public class PizzaController : ControllerBase
    {
        private readonly PizzaContext _context = default!;

        public PizzaController(PizzaContext context) 
        {
            _context = context;
        }

        [HttpGet("GetPizzas")]
        public IList<Pizza> GetPizzas()
        {
            if(_context.Pizzas != null)
            {
                return _context.Pizzas.ToList();
            }
            return new List<Pizza>();
        }

        [HttpPost("AddPizza")]
        public void AddPizza(Pizza pizza)
        {
            if (_context.Pizzas != null)
            {
                _context.Pizzas.Add(pizza);
                _context.SaveChanges();
            }
        }

        [HttpDelete("DeletePizza")]
        public void DeletePizza(int id)
        {
            if (_context.Pizzas != null)
            {
                var pizza = _context.Pizzas.Find(id);
                if (pizza != null)
                {
                    _context.Pizzas.Remove(pizza);
                    _context.SaveChanges();
                }
            }            
        } 
        
    }
}