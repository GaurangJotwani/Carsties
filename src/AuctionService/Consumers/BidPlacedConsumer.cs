using AuctionService.Data;
using Contracts;
using MassTransit;

namespace AuctionService;
public class BidPlacedConsumer : IConsumer<BidPlaced>
{
    private readonly AuctionDbContext _dbContext;

    public BidPlacedConsumer(AuctionDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public async Task Consume(ConsumeContext<BidPlaced> context)
    {
      Console.WriteLine("--> Consuming bid placed");
      var auction = await _dbContext.Auctions.FindAsync(context.Message.AuctionId);
      
      if (auction.CurrentHigh == null 
      || context.Message.BidStatus.Contains("Accepted") 
      && context.Message.Amount > auction.CurrentHigh)
      {
        auction.CurrentHigh = context.Message.Amount;
        await _dbContext.SaveChangesAsync();
      }
    }
}
