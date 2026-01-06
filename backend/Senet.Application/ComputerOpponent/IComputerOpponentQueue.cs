using Senet.Model;

namespace Senet.Application.ComputerOpponent
{
    public interface IComputerOpponentQueue
    {
        ValueTask EnqueueAsync(GameState gameState);
        ValueTask<GameState> DequeueAsync(CancellationToken cancellationToken);
    }
}
