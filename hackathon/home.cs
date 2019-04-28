public class Home : Microsoft.Xna.Framework.Game
{
    Texture2D EarthTexture;
    Rectangle EarthRect;
    

//make boxes with reuce waste, energy conservation, and energy conservation
// =reduce waste = bottom right , water conservation = top right, energy conservation = bottom left

    protected override void Initialize()
    {
        EarthRect = new Rectangle(600, 0, 200, 200 );
        base.Initialize();

    }
    protected override void LoadContent(){
        spriteBatch = new spriteBatch(GraphicsDevice);
        EarthTexture = this.Content.Load<Texture2D>("Earth");

    }
    protected override void Draw(GameTime gameTime){
        GraphicsDevice.Clear(Color.CornflowerBlue);
        spriteBatch.Begin();
        spriteBatch.Draw(EarthTexture,EarthRect, Color.White);
        spriteBatch.End();
        base.Draw(gameTime);
    }


}