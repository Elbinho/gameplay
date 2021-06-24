import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
    bar: {
        width: 39,
        height: 3,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignItems: 'center',
        marginTop: 13,
        marginBottom: 103
    }
});