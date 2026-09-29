
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Student Profile</Text>
        <Text style={styles.headerSubtitle}>
          Academic Information
        </Text>
      </View>

      {/* Profile */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AC</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Chezza</Text>
          <Text style={styles.course}>BS Computer Science</Text>
          <Text style={styles.section}>BSCS 3B</Text>
        </View>
      </View>

      {/* Academic Overview */}
      <Text style={styles.sectionTitle}>Academic Overview</Text>

      <View style={styles.overviewBox}>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewNumber}>6</Text>
          <Text style={styles.overviewLabel}>Subjects</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.overviewItem}>
          <Text style={styles.overviewNumber}>92%</Text>
          <Text style={styles.overviewLabel}>Average</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.overviewItem}>
          <Text style={styles.overviewNumber}>A</Text>
          <Text style={styles.overviewLabel}>Status</Text>
        </View>
      </View>

      {/* Current Semester */}
      <Text style={styles.sectionTitle}>Current Semester</Text>

      <View style={styles.semesterCard}>
        <View>
          <Text style={styles.cardTitle}>First Semester</Text>
          <Text style={styles.cardSubtitle}>School Year 2026-2027</Text>
        </View>

        <View style={styles.activeBadge}>
          <Text style={styles.activeText}>ACTIVE</Text>
        </View>
      </View>

      {/* Activities */}
      <Text style={styles.sectionTitle}>Recent Activities</Text>

      <View style={styles.activityItem}>
        <View style={styles.activityIcon}>
          <Text>📘</Text>
        </View>

        <View style={styles.activityInfo}>
          <Text style={styles.activityTitle}>Programming Activity</Text>
          <Text style={styles.activityDate}>Completed</Text>
        </View>

        <Text style={styles.check}>✓</Text>
      </View>

      <View style={styles.activityItem}>
        <View style={styles.activityIcon}>
          <Text>📝</Text>
        </View>

        <View style={styles.activityInfo}>
          <Text style={styles.activityTitle}>UI Design Activity</Text>
          <Text style={styles.activityDate}>In Progress</Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </View>

      {/* Profile Options */}
      <Text style={styles.sectionTitle}>Profile Options</Text>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>👤</Text>
        <Text style={styles.optionText}>Personal Information</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>📚</Text>
        <Text style={styles.optionText}>My Subjects</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>⚙️</Text>
        <Text style={styles.optionText}>Settings</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Student Profile • 2026-2027
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FA',
  },

  header: {
    backgroundColor: '#B83280',
    paddingTop: 60,
    paddingBottom: 35,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#FCE4EC',
    fontSize: 15,
    marginTop: 6,
  },

  profileSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -20,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#F8D7E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },

  avatarText: {
    color: '#B83280',
    fontSize: 25,
    fontWeight: 'bold',
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#292929',
  },

  course: {
    color: '#666666',
    marginTop: 5,
  },

  section: {
    color: '#999999',
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#292929',
    marginHorizontal: 20,
    marginTop: 26,
    marginBottom: 12,
  },

  overviewBox: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 3,
  },

  overviewItem: {
    alignItems: 'center',
    flex: 1,
  },

  overviewNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B83280',
  },

  overviewLabel: {
    color: '#777777',
    marginTop: 5,
    fontSize: 12,
  },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#E5E5E5',
  },

  semesterCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },

  cardSubtitle: {
    color: '#888888',
    marginTop: 5,
  },

  activeBadge: {
    backgroundColor: '#F8D7E5',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  activeText: {
    color: '#B83280',
    fontSize: 11,
    fontWeight: 'bold',
  },

  activityItem: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  activityIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activityInfo: {
    flex: 1,
    marginLeft: 13,
  },

  activityTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
  },

  activityDate: {
    color: '#888888',
    marginTop: 4,
    fontSize: 12,
  },

  check: {
    color: '#B83280',
    fontSize: 22,
    fontWeight: 'bold',
  },

  arrow: {
    color: '#999999',
    fontSize: 25,
  },

  option: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 16,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  optionIcon: {
    fontSize: 20,
    marginRight: 14,
  },

  optionText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#444444',
  },

  footer: {
    textAlign: 'center',
    color: '#AAAAAA',
    fontSize: 12,
    marginTop: 25,
    marginBottom: 35,
  },
});