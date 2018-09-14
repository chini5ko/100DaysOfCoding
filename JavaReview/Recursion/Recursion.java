public class Recursion
{
    public static int f( int x ) {
        if( x == 0 ){
            System.out.println( "Reach base");
            return 0; 
        }
           
        else{
            System.out.println( "I am now in f of " + x);
              return 2 * f( x - 1 ) + x * x;
        }
    }

    public static void main( String [ ] args )
    {
        System.out.println( "f(4) = " + f(4) );
    }
}
